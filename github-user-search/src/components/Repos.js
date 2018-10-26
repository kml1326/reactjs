import React, { Component } from 'react';

class Repos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reposArray : []
		}
	}

	componentWillMount() {
		fetch(this.props.data.repos_url)
		.then(res => res.json()).then(array => {
				this.setState({ reposArray : array })
		})
	}

  render() {
		return (
			<div>
				<h3 className='sub-header'>Repositories</h3>
				{
          this.state.reposArray.map((obj, i) => 
					<div key={i} className='repo'>
						 <p><a href={obj.html_url} className='link'> {obj.name} </a></p>
						 <p>
							<span className='language-name'>{obj.language}</span>
							<span className='fork'><i className="fas fa-code-branch"></i> {obj.forks_count} </span>
							<span className='star'><i className="fas fa-star"></i> {obj.stargazers_count}</span>
							{/* <p> { obj.updated_at } </p> */}
						 </p>
					 </div>
					)
        }
					
				
				
			</div>
		);
	}
}

export default Repos;