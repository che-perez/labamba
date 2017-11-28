import React from 'react';

function HoursBox(){
  return(
    <div className='hoursBox'>
      <h1 className="hours-header">Hours of Operation</h1>
      <h3 className="hours-header">Kitchen Hours</h3>
      <p className="hours">Daily</p>
      <p className="hours">12p - 12a</p>
      <h3 className="hours-header">Bar Hours</h3>
      <p className="hours">Daily</p>
      <p className="hours">12p - 4a</p>
    </div>
  )
}

export default HoursBox;