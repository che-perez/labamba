import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return(
		<div className="nav"> 
			<nav>
				<ul>
					<Link to ='/'>
					<li>Home</li>
					</Link>
					<Link to ='/Reservation'>
					<li>Reservations</li>
					</Link>
					<Link to ='/Menu'>
					<li>Menu</li>
					</Link>
					<Link to ='/About'>
					<li>About</li>
					</Link>
					<Link to ='/Contact'>
					<li>Contact</li>
					</Link>
				</ul>
			</nav>
		</div>
		)
}

export default Nav
