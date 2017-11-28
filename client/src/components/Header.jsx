import React from 'react';
import Nav from './Nav';
import PhoneHours from './PhoneHours';
import SocialMedia from './SocialMedia';


const Header = () => {
	return(
		<div className="header">
			<PhoneHours />
			<div className="logo">LaBamba Mofongo</div>
			<Nav />
			<SocialMedia />
		</div>
		)
}

export default Header;
