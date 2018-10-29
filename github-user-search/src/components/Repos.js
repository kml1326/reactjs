import React, { Component } from 'react';

class Repos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reposArray : []
		}
		this.getUpdatedTime = this.getUpdatedTime.bind(this);
	}

	componentWillMount() {
		fetch(this.props.data.repos_url)
		.then(res => res.json()).then(array => {
				this.setState({ reposArray : array })
		})
	}
	componentWillUpdate() {
		fetch(this.props.data.repos_url)
		.then(res => res.json()).then(array => {
				this.setState({ reposArray : array })
		})
	}

	getUpdatedTime(repoDate) {
		let date = new Date(repoDate);
		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDate();
		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();
		let current_date = new Date();
		let current_year = current_date.getFullYear();
		let current_month = current_date.getMonth();
		let current_day = current_date.getDate();
		let current_hour = current_date.getHours();
		let current_minute = current_date.getMinutes();
		let current_second = current_date.getSeconds();

		if(year < current_year) {
			return (current_year - year + ' years');
		} else if(month < current_month) {
			return (current_month - month) + ' months';
		} else if (day < current_day) {
			return (current_day - day) + ' days';
		} else if(hour < current_hour) {
			return (current_hour - hour) + ' hours';
		} else if(minute < current_minute) {
			return (current_minute - minute) + ' minutes';
		} else if(second < current_second) {
			return (current_second - second) + ' seconds';
		}

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
							<span className='updated-info'>last commit { this.getUpdatedTime(obj.updated_at )} ago </span>
						 </p>
					 </div>
					)
        }
					
				
				
			</div>
		);
	}
}

export default Repos;