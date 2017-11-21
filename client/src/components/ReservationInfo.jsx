import React, { Component } from 'react';

class ReservationInfo extends Component {
	constructor(props) {
		super(props)
		console.log(this.props, 'props from reservationinfo component')
	}


	render() {
		return(
			<div className="res-form-container">
			<div className="res-info">			
				<input onChange={this.props.handleInput} value={this.props.reservation.first_name}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.last_name}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.email}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.telephone}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.reserve_date}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.reserve_time}></input>
				<input onChange={this.props.handleInput} value={this.props.reservation.seats}></input>
			</div>
			<div className="change-buttons">
				<button>Edit</button>
				<button>Delete</button>
			</div>
			</div>
			)
	}
}

export default ReservationInfo
