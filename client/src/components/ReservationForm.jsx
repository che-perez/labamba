import React, { Component } from 'react';
import TableReservation from './TableReservation';

class ReservationForm extends React.Component {
	constructor(props) {
  	super(props);
		this.state = {
			display: true,
		}
		this.displayTable = this.displayTable.bind(this);
}

displayTable() {
	this.setState ({
		display: false,
	})
}

    render() {
  		return(
				<div>
				{ this.state.display ?
	    	(<div className='reservationForm' onSubmit={() => this.props.moveNext}>
	      		<form className="add-reservation" >
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
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
	        		</select>
							<input type="submit" value="next" onClick={this.displayTable} />
						</form>
					</div>
				) : (
					<TableReservation reservationSubmit={this.props.reservationSubmit}
														handleInput={this.props.handleInput}
														state={this.props.state}
														dataLoaded={this.props.dataLoaded}
														edit={this.props.edit}
														delete={this.props.delete}
														reservationInfo={this.props.reservationInfo} />) }
</div>
)}}

export default ReservationForm;

{/* onSubmit={e => this.props.reservationSubmit('POST', e, this.props.state) }

{this.props.handleInput &&
	 }

*/}
