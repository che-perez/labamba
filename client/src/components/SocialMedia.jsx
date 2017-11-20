import React from 'react'


const SocialMedia = () => {
	return(
		<div className="social-media">
			<a className="fbLink" href="https://www.facebook.com/"><img alt="facebookIcon" className="sm-icon" src={require('./public/greyCircle/Facebook.png')} /></a>
			<a className="ttLink" href="https://twitter.com/"><img alt="twitterIcon" className="sm-icon" src={require('./public/greyCircle/Twitter.svg')} /></a>
			<a className="igLink"  href="https://www.instagram.com/"><img alt="igIcon" className="sm-icon" src={require('./public/greyCircle/Instagram.svg')} /></a>
			<a className="scLink"  href="https://www.snapchat.com/"><img alt="snapIcon" className="sm-icon" src={require('./public/greyCircle/Snapchat.svg')} /></a>
		</div>
		)
}

export default SocialMedia;
