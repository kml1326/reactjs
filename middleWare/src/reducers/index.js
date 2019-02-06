import { FETCH_DATA } from '../types/Type';

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
};
