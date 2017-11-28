import React from 'react';
import MapBox from './MapBox';
import ContactBox from './ContactBox';
import HoursBox from './HoursBox';

function Contact(){
  return(
    <div className='contact'>
      <ContactBox />
      <HoursBox />
    </div>
  )
}

export default Contact;