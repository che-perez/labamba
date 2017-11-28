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
   if(currentRez.some(rez => rez.mesa_id == mesa.id)) {
      mesa.disabled = true
      } 
    console.log(mesa.disabled);
   console.log(this.props.state.seats);
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
            console.log(this.props.state.seats != reserved.seats);
              if(reserved.disabled){
                return(
                <input key={reserved.id} className={`tablefor${reserved.seats}`} type='radio' value={reserved.id} id='i' name='mesa_id' onChange={this.props.handleInput} disabled />
                )
              } if(this.props.state.seats != reserved.seats) {
               return(
                <input key={reserved.id} className={`tablefor${reserved.seats}`} type='radio' value={reserved.id} id='i' name='mesa_id' onChange={this.props.handleInput} disabled />
                )
                   } else {
               return(
                <input key={reserved.id} className={`tablefor${reserved.seats}`} type='radio' value={reserved.id} id='i' name='mesa_id' onChange={this.props.handleInput} />
                )
              }
               }
          )}

     <input type='submit' value='Reserve Now' />
   </div>
    </form>
    </div>
)}}

export default TableReservation;
