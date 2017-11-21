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
<<<<<<< HEAD
		this.getReservationByEmail = this.getReservationByEmail.bind(this);
		this.getAllMesas = this.getAllMesas.bind(this);

=======
    this.getReservationByEmail = this.getReservationByEmail.bind(this);
    this.reservationEdit = this.reservationEdit.bind(this);
    this.reservationDelete = this.reservationDelete.bind(this);
>>>>>>> passed down DELETE and PUT methods as props to ReservationInfo component
	}

  componentDidMount(){
      this.getReservation();
			this.getAllMesas();
  };

  handleInputChange(e){
		e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target.value);
    this.setState({
      [name]: value,
    })
  }

  getReservation(event){
    fetch('/api/reservations/')
      .then(res => res.json())
      .then(res => {
        console.log('getReservation is logging')
        this.setState({
          allReservations: res.data.reservations,
          dataLoaded: true,
      })
      }).catch(err => console.log(err));
    }

    getReservationByEmail(event, email){
      fetch(`/api/reservations/email/dan@dan.com`)
        .then(res => res.json())
        .then(res => {
          console.log('email fetched');
          console.log(res.data, 'this is the res.data value')
          this.setState({
            allReservations: res.data.reservation,
            dataLoaded: true,
            searched: true,
        })
        }).catch(err => console.log(err));
        console.log(this)
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

    reservationEdit(method, e, data){
     fetch('/api/tweeds', {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
      }).then(res => res.json())
        .then(res => {
          this.setState({
            reservationStatus: 'edit',
          })
          console.log('reservation edited')
         this.getReservationByEmail()
       })
    }
    

    reservationDelete(id, e) {
       e.preventDefault();
       console.log('reservation deleted')
       fetch(`/api/reservations/`, {
         method: 'DELETE',
       }).then(res => res.json())
         .then(res => {
          this.setState({
            reservationStatus: 'delete',
          })
         this.getReservationByEmail();
      }).catch(err => console.log(err));
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
	      {this.state.dataLoaded ? (
        <SearchByEmail  handleInput={this.handleInputChange}
                  getReservationByEmail={this.getReservationByEmail}
                  allReservations={this.state.allReservations}
                  dataLoaded={this.state.dataLoaded}
                  searched={this.state.searched}
                  reservationStatus={this.state.reservationStatus}
                  reservationEdit={this.reservationDelete}
                  reservationDelete={this.reservationDelete} />
                   ) : (
                  <p>Loading reservation data...</p>
                   )}
      </div>

	  )
	}
}
export default Reservation;
