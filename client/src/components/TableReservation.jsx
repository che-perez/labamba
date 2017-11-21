import React from 'react';

function TableReservation(props){
  return(
    <div>
    <div className='tableReservation'>
      <div className='table' value='1' id='a'>2</div>
      <div className='table' value='2' id='b'>2</div>
      <div className='table' value='3' id='c'>2</div>
      <div className='table' value='4' id='d'>2</div>
      <div className='table' value='5' id='e'>2</div>
      <div className='table' value='6' id='f'>2</div>
      <div className='table' value='7' id='g'>2</div>
      <div className='table' value='8' id='h'>2</div>
      <div className='table' value='9' id='i'>4</div>
      <div className='table' value='10' id='j'>4</div>
      <div className='table' value='11' id='k'>4</div>
      <div className='table' value='12' id='l'>4</div>
      <div className='table' value='13' id='m'>4</div>
      <div className='table' value='14' id='n'>4</div>
      <div className='table' value='15' id='o'>4</div>
      <div className='table' value='16' id='p'>4</div>
      <div className='table' value='17' id='q'>8</div>
      <div className='table' value='18' id='r'>8</div>
      <div className='table' value='19' id='s'>8</div>
      <div className='table' value='20' id='t'>8</div>
    </div>
    <button onClick={e => this.props.reservationSubmit('POST', e, this.props.state) }>Reserve Now</button>
    </div>
  )
}

export default TableReservation;
