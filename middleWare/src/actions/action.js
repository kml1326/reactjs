import { FETCH_DATA } from '../types/Type';

export function showArticles() {
  return (dispatch) => {
    fetch('https://conduit.productionready.io/api/articles')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_DATA,
        data: data.articles
      })
    })
  }
};
