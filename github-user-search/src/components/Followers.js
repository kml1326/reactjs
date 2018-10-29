import React, { Component } from 'react';

class Followers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			followerArray : []
		}
	}

	componentWillMount() {
		fetch(this.props.data.followers_url)
		.then(res => res.json()).then(array => {
				this.setState({ followerArray : array })
		})
	}
	componentWillUpdate() {
		fetch(this.props.data.followers_url)
		.then(res => res.json()).then(array => {
				this.setState({ followerArray : array })
		})
	}

	render() {
		return (
			<div>
				<h3 className='sub-header'>Followers</h3>
				{
					this.state.followerArray.map((obj, i) => 
					<div key={i} className='follower-info'>
							<img src={obj.avatar_url} alt='follower' height='100px' width='100px' className='follower-img'/>
							<span><a href={obj.html_url} className='follower-name'> {obj.login} </a></span>
						</div>
					)
				}								
			</div>
		);
	}
}

export default Followers;