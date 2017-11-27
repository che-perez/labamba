import React, { Component } from 'react';

class TableReservation extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.state);
    console.log(this.props.state.seats);
    console.log(this.props.allReservations);
    console.log(this.props.mesas);

    this.filterReservations();
  }

filterReservations(){
  let mesas = this.props.mesas;
  let currentRez= this.props.allReservations.filter(rez => rez.reserve_time == this.props.state.reserve_time && rez.reserve_date == this.props.state.reserve_date);
  let tableIsTaken = mesas.map(mesa => {
    mesa.taken = currentRez.some(rez => rez.mesa_id == mesa.id)
    console.log(mesa.taken);
    return mesa
  })
  return tableIsTaken
}

render(){
  let mesas = this.filterReservations()
  console.log(mesas);
  return(

<div>
  <form className='tableReservation' onSubmit={e => this.props.reservationSubmit('POST', e, this.props.state) } >
      <div>
          {mesas.map(reserved => {
            console.log(reserved);
              if(reserved.taken){
                return(
                <input className={`tablefor${reserved.seats}`} type='radio' value={reserved.id} id='i' name='mesa_id' onChange={this.props.handleInput} disabled />
                )
              } else {
                return(
                <input className={`tablefor${reserved.seats}`} type='radio' value={reserved.id} id='i' name='mesa_id' onChange={this.props.handleInput} />
                )
              }
          })}

     <input type='submit' value='Reserve Now' />
   </div>
    </form>
    </div>
)}}

export default TableReservation;

{/*this.props.state.allReservations[i].reserve_date == this.props.state.reserve_date && props.state.allReservations[i].reserve_time == props.state.reserve_time && props.state.allReservations[i].mesa_id

  // <div>
  // <form className='tableReservation' onSubmit={e => this.props.reservationSubmit('POST', e, this.props.state) } >
  //   {this.props.state.seats == '2' ?
  //     (<div>
  //         {this.props.allReservations.map((reserv) => {
  //           console.log(reserv.reserve_date);
  //             if (reserv.reserve_date == this.props.state.reserve_date && reserv.reserve_time == this.props.state.reserve_time && reserv.mesa_id) {
  //               return (
  //                 <input className='tablefor2' type='radio' disabled value={reserv.mesa_id} id='a' name='mesa_id' onChange={this.props.handleInput} />
  //               ) } else if (reserv.reserve_date == this.props.state.reserve_date && reserv.reserve_time && reserv.seats == this.props.state.seats && reserv.mesa_id) {
  //                 return (
  //                   <input className='tablefor2' type='radio' disabled value={reserv.mesa_id} id='a' name='mesa_id' onChange={this.props.handleInput} />
  //                 )
  //             }
  //
  //         })}
  //
  //   </div>) : (<div>
  //
  //         <input className='tablefor2' type='radio' value='1' id='a' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='2' id='b' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='3' id='c' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='4' id='d' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='5' id='e' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='6' id='f' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='7' id='g' name='mesa_id' onChange={this.props.handleInput} disabled />
  //         <input className='tablefor2' type='radio' value='8' id='h' name='mesa_id' onChange={this.props.handleInput} disabled />
  //
  //       </div>)}



    // var isAvailable = currentRez.some(rez => rez.mesa_id !== mesas.id);
  */}
