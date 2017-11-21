import React from 'react';

const ReservationInfo = (props) => {
	return(
		<div className="res-info">
			<p>{props.reservation.first_name}</p>
			<p>{props.reservation.last_name}</p>
			<p>{props.reservation.email}</p>
			<p>{props.reservation.telephone}</p>
			<p>{props.reservation.reserve_date}</p>
			<p>{props.reservation.reserve_time}</p>
			<p>{props.reservation.seats}</p>
		</div>
		)
}

export default ReservationInfo
