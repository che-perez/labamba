import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import { Link, Redirect } from 'react-router-dom'

class Reservation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reservation: {
	  			firstName: props.reservation ? props.reservation.first_name : '',
	  			lastName: props.reservation ? props.reservation.last_name : '',
	  			email: props.reservation ? props.reservation.email : '',
	  			phone: props.reservation ? props.reservation.telephone : '',
	  			date: props.reservation ? props.reservation.reserve_date : '',
	  			time: props.reservation ? props.reservation.reserve_time : '',
	  			seats: props.reservation ? props.reservation.seats : '',
			},
			allReservations: null,
			dataLoaded: false,
			fireRedirect: false,
			redirectPath: null,
		}
		this.reservationSubmit = this.reservationSubmit.bind(this);
    this.getReservation = this.getReservation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.reservationDelete = this.reservationDelete.bind(this);
    this.reservationEdit = this.reservationEdit.bind(this);
	}

  componentDidMount(){
    return(
      this.getReservation()
    )
    };

  handleInputChange(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState({
      [name]: value,
  })
}

  getReservation(){
    fetch('/api/reservations/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          allReservations: res.data.reservations,
          dataLoaded: true,
      })
      }).catch(err => console.log(err));
  }

	reservationSubmit(method, e, id) {
      e.preventDefault();
	  	console.log('new reservation made')
	  	console.log(this.state, 'this is the state')
	  	fetch(`/api/reservations/`, {
	  		method: 'POST',
	  		headers: {
	  			'Content-Type': 'application/json'
	  		},
        body: JSON.stringify(id),
	  	}).then(res => res.json())
      .then(res => {
        this.getReservation();
	  	})
	 }

   reservationEdit(method, e, data){
     fetch('/api/tweeds', {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     }).then(res => res.json())
       .then(res => {
         this.getReservation()
       })
    }

   reservationDelete(id, e) {
       e.preventDefault();
 	  	 console.log('reservation deleted')
 	  	 fetch(`/api/reservations/`, {
 	  	   method: 'DELETE',
 	  	 }).then(res => res.json())
         .then(res => {
         this.getReservation();
 	  	}).catch(err => console.log(err));
 	 }



	render() {
	  return(
	    <div className='reservation'>
	      <ReservationForm reservationSubmit={this.reservationSubmit}
                         handleInput={this.handleInputChange}
	                       state={this.state}
                         dataLoaded={this.state.dataLoaded}
                         edit={this.reservationEdit}
                         delete={this.reservationDelete} />
	    </div>
	  )
	}
}
export default Reservation;
