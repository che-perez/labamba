import React from 'react';

function ContactBox(){
  return(
    <div className='contactBox'>
        <h1 className="contact-header">Contact</h1>
      	<p className="contact-info">Email:   <a href="mailto:labamba@mofongo.com">Labamab@mofongo.com</a></p>
      	<p className="contact-info">Phone:   <a href="tel:212-555-1234">212-555-1234</a></p>
    </div>
  )
}

export default ContactBox;
