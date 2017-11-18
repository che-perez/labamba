import React from 'react';
import MapBox from './MapBox';
import ContactBox from './ContactBox';
import HoursBox from './HoursBox';

function Contact(){
  return(
    <div className='contact'>
      <MapBox />
      <ContactBox />
      <HoursBox />
      <p>contact info here</p>
    </div>
  )
}

export default Contact;
