import React from 'react';

function HoursBox(){
  return(
    <div className='hoursBox'>
      <h1 className="hours-header">Hours of Operation</h1>
      <h3 className="hours-subh">Kitchen Hours</h3>
      <p className="kitchen-hours">Daily</p>
      <p className="kitchen-hours">12p - 12a</p>
      <h3 className="hours-subh">Bar Hours</h3>
      <p className="bar-hours">Daily</p>
      <p className="bar-hours">12p - 4a</p>
    </div>
  )
}

export default HoursBox;
