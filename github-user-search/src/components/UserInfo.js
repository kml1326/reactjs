import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
		const { data } = this.props;
		return (
			<div className='user-info'>
				<img src={data.avatar_url} alt='user' height='200px' width='200px' className='user-img'/>
				<p className='name'>{data.name}</p>
				<p className='user-name'>
					<a href={data.html_url} className='link'> {`@${data.login}`} </a>
				</p>
				<p className='user-bio'> {data.bio} </p>
				<p className='user-blog'>
					<a href={data.blog} className='link'> {data.blog} </a>
				</p>
				<div className='user-overView'>
					<p className='overView_item'>
						<span className='overView_count'> {data.followers} </span>
						<label className='overView_label'> Followers </label>
					</p>
					<p className='overView_item'>
						<span className='overView_count'> {data.following} </span>
						<label className='overView_label'> Following </label>
					</p>
					<p className='overView_item'>
						<span className='overView_count'> {data.public_repos} </span>
						<label className='overView_label'> Repos </label>
					</p>
				</div>
			</div>
		);
	}
}

export default UserInfo;