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
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.first_name}></input>
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.last_name}></input>
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.email}></input>
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.telephone}></input>
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.reserve_date}></input>
				<input type="text" name={this.props.reservation} onChange={this.props.handleInput} placeholder={this.props.reservation.reserve_time}></input>
				<input type="text" name={this.props.reservation.seats} onChange={this.props.handleInput} placeholder={this.props.reservation.seats}></input>
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
