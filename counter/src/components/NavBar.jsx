import React from 'react';

// stateless functional component
const NavBar = ({totalCounters}) => {
	return (
		<nav className='navbar'>
			<a href="#" className='navbar-title'>
				Navbar
				<span className='totalcounters'>
					{cdtotalCounters}
				</span>
			</a>

		</nav>
	);
};

export default NavBar;