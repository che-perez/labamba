import React from 'react';

const TableReservation = props => {
  console.log(props.state);

  return(
    <div>
    <form className='tableReservation' onSubmit={e => props.reservationSubmit('POST', e, props.state) } >
      <input className='tablefor2' type='radio' value='1' id='a' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='2' id='b' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='3' id='c' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='4' id='d' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='5' id='e' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='6' id='f' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='7' id='g' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor2' type='radio' value='8' id='h' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='9' id='i' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='10' id='j' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='11' id='k' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='12' id='l' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='13' id='m' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='14' id='n' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='15' id='o' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor4' type='radio' value='16' id='p' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor8' type='radio' value='17' id='q' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor8' type='radio' value='18' id='r' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor8' type='radio' value='19' id='s' name='mesa_id' onChange={props.handleInput} />
      <input className='tablefor8' type='radio' value='20' id='t' name='mesa_id' onChange={props.handleInput} />
     <input type='submit' value='Reserve Now' />
    </form>
    </div>
  )
}

export default TableReservation;
