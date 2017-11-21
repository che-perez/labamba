import React from 'react'


const SocialMedia = () => {
	return(
		<div className="social-media">
			<a className="smLink" href="https://www.facebook.com/"><img alt="facebookIcon" className="sm-icon" src={require('./public/greyCircle/Facebook.png')} /></a>
			<a className="smLink" href="https://twitter.com/"><img alt="twitterIcon" className="sm-icon" src={require('./public/greyCircle/Twitter.png')} /></a>
			<a className="smLink"  href="https://www.instagram.com/"><img alt="igIcon" className="sm-icon" src={require('./public/greyCircle/Instagram.png')} /></a>
			<a className="smLink"  href="https://www.snapchat.com/"><img alt="snapIcon" className="sm-icon" src={require('./public/greyCircle/Snapchat.png')} /></a>
		</div>
		)
}

export default SocialMedia;
