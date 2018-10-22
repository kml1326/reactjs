import React, { Component } from 'react'
import './App.scss'

class Header extends Component {
	render() {
		return (
			<header className='header'>
				<img src='https://yts.am/assets/images/website/logo-YTS.svg' alt='yts logo'/>
				<nav className="nav-container">
					<input type="text" placeholder="Quick Search" className='header-search'/>
					<ul className="nav-list">
						<li>Home</li>
						<li>Browse Movies</li>
						<li>
							<span className=''>Login</span>
							<span className=''>Register</span>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;