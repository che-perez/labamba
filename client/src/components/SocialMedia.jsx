import React from 'react'


const SocialMedia = () => {
	return(
		<div className="social-media">
			<a className="fbLink" href="https://www.facebook.com/"><img alt="facebookIcon" classname="sm-icon" src={require('./public/facebook-icon.jpg')} /></a>
			<a className="ttLink" href="https://twitter.com/"><img alt="twitterIcon" className="sm-icon" src={require('./public/twitter-icon.ico')}/></a>
			<a className="igLink"  href="https://www.instagram.com/"><img alt="igIcon" className="sm-icon" src={require('./public/instagram-icon.png')}/></a>
			<a className="scLink"  href="https://www.snapchat.com/"><img alt="snapIcon" className="sm-icon" src={require('./public/snapchat-icon.ico')}/></a>
		</div>
		)
}

export default SocialMedia;
