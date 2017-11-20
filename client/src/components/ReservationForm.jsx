import React, { Component } from 'react';

class ReservationForm extends Component {
	constructor(props) {
  		super(props)
  		this.reservationSubmit = this.reservationSubmit.bind(this)
  		this.newReservationHandler = this.newReservationHandler.bind(this)
  	}

  	reservationSubmit(event, id) {
	  	event.preventDefault();
	  	console.log('new reservation made')
	  	console.log(this.state, 'this is the state')
	  	fetch(`/api/reservations/`, {
	  		method: 'POST',
	  		reservation: this.state.reservation,
	  		headers: {
	  			'Content-Type': 'application/json'
	  		}
	  	}).then((res)=>{
	  		console.log('added')
	  		this.setState({
	  			fireRedirect: true,
	  		})
	  	})
	 }

  	newReservationHandler(e) {
	 	const reservation = e.target.name;
	 	const value = e.target.value;
	 	this.setState({
	 		[reservation]: value,
	 	})
	 	console.log('name is ', reservation, 'value is ', value)
	 	console.log(this.props.state)
	 }
	 render() {
  		return(
	    	<div className='reservationForm'>
	      		<form className="add-reservation" onSubmit={e => this.props.reservationSubmit('POST', e, this.props.state)}>
	        		<input type="text" placeholder="First Name"
	        			name="first_name"
	        			onChange={this.props.handleInput} />
	        		<input type="text" placeholder="Last Name"
	        			name="last_name"
	        			onChange={this.props.handleInput} />
	        		<input type="email" placeholder="E-mail"
	         			name="email"
	        			onChange={this.props.handleInput} />
	        		<input type="tel" placeholder="Phone Number"
	         			name="telephone"
	        			onChange={this.props.handleInput}/>
              <input type="text" placeholder="Reservation Date"
	         			name="reserve_date"
	        			onChange={this.props.handleInput} />
              <input type="text" placeholder="Reservation Time"
	        			name="reserve_time"
	        			onChange={this.props.handleInput} />
	        		<input type="number" placeholder="Seats"
	         			name="seats"
	        			onChange={this.props.handleInput} />
	        		<input type="submit" value="Make Reservation" />
	      		</form>
	    	</div>
	  	)
	 }
}

export default ReservationForm;
