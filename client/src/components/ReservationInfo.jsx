import React from 'react';

const ReservationInfo = (props) => {
	return(
		<div className="res-info">
			<input value={props.reservation.first_name}></input>
			<input value={props.reservation.last_name}></input>
			<input value={props.reservation.email}></input>
			<input value={props.reservation.telephone}></input>
			<input value={props.reservation.reserve_date}></input>
			<input value={props.reservation.reserve_time}></input>
			<input value={props.reservation.seats}></input>
		</div>
		)
}

export default ReservationInfo
