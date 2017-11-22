import React, { Component } from 'react';

class ReservationInfo extends Component {
	constructor(props) {
		super(props)
		console.log(this.props, 'props from reservationinfo component')
	}


	render() {
		return(
			<div className="res-form-container">
			<form className="res-edit" onSubmit={(e) => (e.preventDefault(),
				console.log(this.props, 'these are the props within the form in reservation info'),
				this.props.reservationEdit())}>
			<div className="edit-info">			
				<input onChange={this.props.handleInput} value={this.props.reservation.first_name}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.last_name}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.email}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.telephone}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.reserve_date}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.reserve_time}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.seats}></input>
			</div>
			<div className="edit-button">
				<button>Edit</button>
			</div>
			</form>
			<div className="delete-button">
			<form className="res-delete" onSubmit={(e) => (e.preventDefault(),
				console.log(this.props, 'therse are the props within delete in res form'),
				this.props.reservationDelete(this.props.reservation.id))}>
				<button>Delete</button>
			</form>
			</div>
			</div>
			)
	}
}

export default ReservationInfo
