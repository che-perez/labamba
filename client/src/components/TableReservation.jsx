import React from 'react';

{/*onClick={() => props.reservationInfo.setState({mesa_id: value})}*/}

function TableReservation(props){
  console.log(props.state);
  return(
    <div>
    <div className='tableReservation'>
      <div className='table' value='1' id='a' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='2' id='b' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='3' id='c' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='4' id='d' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='5' id='e' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='6' id='f' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='7' id='g' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='8' id='h' name='mesa_id' onClick={props.handleInput}>2</div>
      <div className='table' value='9' id='i' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='10' id='j' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='11' id='k' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='12' id='l' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='13' id='m' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='14' id='n' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='15' id='o' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='16' id='p' name='mesa_id' onClick={props.handleInput}>4</div>
      <div className='table' value='17' id='q' name='mesa_id' onClick={props.handleInput}>8</div>
      <div className='table' value='18' id='r' name='mesa_id' onClick={props.handleInput}>8</div>
      <div className='table' value='19' id='s' name='mesa_id' onClick={props.handleInput}>8</div>
      <div className='table' value='20' id='t' name='mesa_id' onClick={props.handleInput}>8</div>
    </div>
    <button onClick={e => this.props.reservationSubmit('POST', e, this.props.state) }>Reserve Now</button>
    </div>
  )
}

export default TableReservation;
