import React from 'react';
import Nav from './Nav';
import PhoneHours from './PhoneHours';
import SocialMedia from './SocialMedia';


const Header = () => {
	return(
     <div>
			<PhoneHours />
		<div className="header">
    <h1 className="logo">La Bamba Mofongo</h1>
			<Nav />
		</div>
			<SocialMedia />
     </div>
		)
}

export default Header;
