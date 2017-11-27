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
					mesa_id: props.reservation ? props.reservation.mesa_id : '',
			},
			allReservations: null,
			dataLoaded: false,
			fireRedirect: false,
			redirect: null,
			searched: false,
			reservationStatus: '',
			allMesas: {},
			allMesasLoaded: false,
		}
		this.reservationSubmit = this.reservationSubmit.bind(this);
    this.getReservation = this.getReservation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
		this.moveNext = this.moveNext.bind(this);
		this.getReservationByEmail = this.getReservationByEmail.bind(this);
		this.getAllMesas = this.getAllMesas.bind(this);
	}

  componentDidMount(){
      this.getReservation();
			this.getAllMesas();
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

	getReservationByEmail(event, email){
	      fetch(`/api/reservations/email/${this.state.email}`)
	        .then(res => res.json())
	        .then(res => {
	          console.log(this, 'this is this from getReservationByEmail')
	          this.setState({
	            allReservations: res.data.reservation,
	            dataLoaded: true,
	            searched: true,
	        })
	        }).catch(err => console.log(err));
	    }

	getAllMesas(){
	 		 fetch('/api/reservations/mesas')
	 		 .then(res => res.json())
	 		 .then(res => {
	 			 this.setState({
	 				 allMesas: res.data.mesas,
					 allMesasLoaded: true,
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
				this.getAllMesas();
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
												 next={this.moveNext}
												 allReservations={this.state.allReservations}
												 mesas={this.state.allMesas} />
	    </div>
	  )
	}
}
export default Reservation;
