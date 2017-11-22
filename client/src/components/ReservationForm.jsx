import React, { Component, PropTypes } from 'react';
{/*import { ModalContainer, ModalDialog } from 'react-modal-dialog';*/}

class ReservationForm extends React.Component {
	constructor(props) {
  	super(props)
}
    render() {
  		return(
	    	<div className='reservationForm'>
	      		<form className="add-reservation" onSubmit={e => this.props.reservationSubmit('POST', e, this.props.state) }>
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
							<select  type="text"
	        			name="reserve_time"
	        			onChange={this.props.handleInput}>
								<option value="100">1:00 PM</option>
								<option value="200">2:00 PM</option>
								<option value="300">3:00 PM</option>
								<option value="400">4:00 PM</option>
								<option value="500">5:00 PM</option>
								<option value="600">6:00 PM</option>
								<option value="700">7:00 PM</option>
								<option value="800">8:00 PM</option>
								<option value="900">9:00 PM</option>
								<option value="1000">10:00 PM</option>
								<option value="1100">11:00 PM</option>
						  </select>
	        		<select type="number" placeholder="Seats"
	         			name="seats"
	        			onChange={this.props.handleInput} >
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
	        		</select>
	        		<input type="submit" value="Make Reservation" />
	      		</form>
	    	</div>
	  	)

}
}
export default ReservationForm;
