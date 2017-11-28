import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TableReservation from './TableReservation';

class ReservationForm extends Component {
	constructor(props) {
  	super(props);
		this.state = {
			allReservations: this.props.allReservations,
			display: true,
			fireRedirect: false,
			redirectPath: null,
			dataLoaded: this.props.dataLoaded,
		}
		this.displayTable = this.displayTable.bind(this);
}

displayTable() {
	this.setState ({
		allReservations: this.props.allReservations,
		display: false,
		fireRedirect: true,
		redirectPath: '/table',
		dataLoaded: this.props.dataLoaded,
	});

}

    render() {
  		return(
				<div>

				{ this.state.display ?
	    	(<div className='reservationForm'>
<div className="form-opacity">
					<div className="make-reservation-here">
						<p>Please Make Your Reservation Below</p>
					</div>
	      		<form id ='formId' className="add-reservation" onSubmit={this.displayTable} >
	        		<input type="text" placeholder="First Name"
	        			name="first_name"
	        			onChange={this.props.handleInput} required />
	        		<input type="text" placeholder="Last Name"
	        			name="last_name"
	        			onChange={this.props.handleInput} required />
	        		<input type="email" placeholder="E-mail"
	         			name="email"
	        			onChange={this.props.handleInput} required />
	        		<input type="tel" placeholder="Phone Number"
	         			name="telephone"
	        			onChange={this.props.handleInput}/>
							<input type="date" placeholder="Reservation Date"
	         			name="reserve_date"
	        			onChange={this.props.handleInput} required />
							<select  type="text"
	        			name="reserve_time"
	        			onChange={this.props.handleInput} required >
								<option>--Choose Time--</option>
								<option value="1:00 PM">1:00 PM</option>
								<option value="2:00 PM">2:00 PM</option>
								<option value="3:00 PM">3:00 PM</option>
								<option value="4:00 PM">4:00 PM</option>
								<option value="5:00 PM">5:00 PM</option>
								<option value="6:00 PM">6:00 PM</option>
								<option value="7:00 PM">7:00 PM</option>
								<option value="8:00 PM">8:00 PM</option>
								<option value="9:00 PM">9:00 PM</option>
								<option value="10:00 PM">10:00 PM</option>
								<option value="11:00 PM">11:00 PM</option>
						  </select>
	        		<select type="number" placeholder="Seats"
	         			name="seats"
	        			onChange={this.props.handleInput} required >
								<option>--Table For--</option>
								<option value="2">2</option>
								<option value="4">4</option>
								<option value="8">8</option>
	        		</select>
							<input type="submit" className="submitBut" value="next" />
						</form>
					</div>
					</div>
				) : (
					<TableReservation reservationSubmit={this.props.reservationSubmit}
														handleInput={this.props.handleInput}
														state={this.props.state}
														dataLoaded={this.props.dataLoaded}
														reservationInfo={this.props.reservationInfo}
														allReservations={this.props.allReservations}
														mesas={this.props.mesas} /> ) }
</div>
)}}

export default ReservationForm;
