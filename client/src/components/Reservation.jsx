import React, { Component } from 'react';
import ReservationForm from './ReservationForm';



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
		}
		this.reservationSubmit = this.reservationSubmit.bind(this);
    this.getReservation = this.getReservation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
		this.moveNext = this.moveNext.bind(this);
	}

  componentDidMount(){
    return(
      this.getReservation()
    )
  };

  handleInputChange(e){
		e.preventDefault();
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

//added redirect for tables component
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

	 moveNext(){
		 return(
		 this.setState({
			 fireRedirect: true,
			 redirectPath: '/table',
		 })
	 )
	 }

	render() {
	  return(
	    <div className='reservation'>
	      <ReservationForm reservationSubmit={this.reservationSubmit}
                         handleInput={this.handleInputChange}
	                       state={this.state}
                         dataLoaded={this.state.dataLoaded}
												 reservationInfo={this.state.reservation}
												 next={this.moveNext} />
	    </div>
	  )
	}
}
export default Reservation;
