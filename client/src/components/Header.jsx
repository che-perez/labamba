import React from 'react';
import Nav from './Nav';
import PhoneHours from './PhoneHours';
import Reservation from './Reservation';
import SocialMedia from './SocialMedia';


const Header = () => {
	return(
		<div className="header">
			<PhoneHours />
			{/*add logo here? */}
			<Nav />
			<SocialMedia />
		</div>
		)
}

export default Header;
