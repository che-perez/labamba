import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import PhoneHours from './PhoneHours';
import Reservation from './Reservation';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import App from '../App';



const Header = () => {
	return(
		<Router>
		<div className="header">
			<PhoneHours />
			{/*add logo here? */}
			<Nav />
				<Route path='/' component={App} />
				<Route path='/Reservation' component={Reservation} />
				<Route path='/Menu' component={Menu} />
				<Route path='/About' component={About} />
				<Route path='/Contact' component={Contact} />
			<SocialMedia />
		</div>
		</Router>
		)
}

export default Header;
