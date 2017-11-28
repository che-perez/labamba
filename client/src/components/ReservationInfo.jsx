import React, { Component } from 'react';

class ReservationInfo extends Component {
	constructor(props) {
		super(props)
		console.log(this.props, 'props from reservationinfo component')
		this.state = {
			reservation: {
				first_name: props.reservation ? props.reservation.first_name : '',
	  			last_name: props.reservation ? props.reservation.last_name : '',
	  			email: props.reservation ? props.reservation.email : '',
	  			telephone: props.reservation ? props.reservation.telephone : '',
	  			date: props.reservation ? props.reservation.reserve_date : '',
	  			time: props.reservation ? props.reservation.reserve_time : '',
	  			seats: props.reservation ? props.reservation.seats : '',
				mesa_id: props.reservation ? props.reservation.mesa_id : '',
				id: props.reservation ? props.reservation.id : '',
			}
		}
		this.handleUpdateChange = this.handleUpdateChange.bind(this)
	}

	handleUpdateChange(e) {
  	e.preventDefault();
  	const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value)
    let peaches = this.props.reservation
    console.log(peaches)
  	this.setState((prevState, props) => {
  		// const newReservation = {
  		// 	newReservation: prevState.reservation
  		// }
  		const newReservation = Object.assign({}, peaches, {[name]: value})
  		console.log(newReservation)
  		return {reservation: newReservation}
  	})
  	console.log("handleUpdateChange")
  	console.log(this.state.reservation)
  }

//throw prop in value into its own state and then set that to value

	render() {
		return(
			<div className="res-form-container">
			<form className="res-edit" onSubmit={(e) => (this.props.reservationEdit(this.state.reservation, e))}>
			<div className="edit-info">			
				<input type="text" name={'first_name'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.first_name}></input>
				<input type="text" name={'lastName'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.last_name}></input>
				<input type="text" name={'email'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.email}></input>
				<input type="text" name={'telephone'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.telephone}></input>
				<input type="text" name={'reserve_date'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.date}></input>
				<input type="text" name={'reserve_time'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.time}></input>
				<input type="text" name={'seats'} onChange={(e) => this.handleUpdateChange(e)} value={this.state.reservation.seats}></input>
			</div>
				<button type="submit">Edit</button>
			</form>
			<div className="delete-button">
			<form className="res-delete" onSubmit={(e) => (e.preventDefault(),
				this.props.reservationDelete(this.props.reservation.id))}>
				<button>Delete</button>
			</form>
			</div>
			</div>
			)
	}
}

export default ReservationInfo
