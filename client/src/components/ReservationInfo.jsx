import React, { Component } from 'react';

class ReservationInfo extends Component {
	constructor(props) {
		super(props)
		console.log(this.props, 'props from reservationinfo component')
	}


	render() {
		return(
			<div className="res-form-container">
			<form className="res-edit" onSubmit={(e) => (this.props.reservationEdit(this.props.reservation, e))}>
			<div className="edit-info">			
				<input type="text" name="reservation.first_name" onChange={this.props.handleInput} placeholder={this.props.reservation.first_name}></input>
				<input type="text" name="last_name" onChange={this.props.handleInput} placeholder="Last Name" value={this.props.reservation.last_name}></input>
				<input type="text" name="email" onChange={this.props.handleInput} placeholder="Email" value={this.props.reservation.email}></input>
				<input type="text" name="telephone" onChange={this.props.handleInput} placeholder="Phone Number" value={this.props.reservation.telephone}></input>
				<input type="text" name="reserve_date" onChange={this.props.handleInput} placeholder="Reservation Date" value={this.props.reservation.reserve_date}></input>
				<input type="text" name="reserve_time" onChange={this.props.handleInput} placeholder="Reservation Time" value={this.props.reservation.reserve_time}></input>
				<input type="text" name="seats" onChange={this.props.handleInput} placeholder="Seats" value={this.props.reservation.seats}></input>
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
