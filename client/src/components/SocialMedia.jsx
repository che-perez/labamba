import React from 'react'


const SocialMedia = () => {
	return(
		<div className="social-media">
			<a className="sm-link" href="https://www.facebook.com/"><img classname="sm-icon" src={require('./public/facebook-icon.jpg')} /></a>
			<a className="sm-link" href="https://twitter.com/"><img className="sm-icon" src={require('./public/twitter-icon.ico')}/></a>
			<a className="sm-link" href="https://www.instagram.com/"><img className="sm-icon" src={require('./public/instagram-icon.png')}/></a>
			<a className="sm-link" href="https://www.snapchat.com/"><img className="sm-icon" src={require('./public/snapchat-icon.ico')}/></a>
		</div>
		)
}

export default SocialMedia;