import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import SearchByEmail from './SearchByEmail'

class Reservation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reservation: {
	  			first_name: props.reservation ? props.reservation.first_name : '',
	  			last_name: props.reservation ? props.reservation.last_name : '',
	  			email: props.reservation ? props.reservation.email : '',
	  			phone: props.reservation ? props.reservation.telephone : '',
	  			date: props.reservation ? props.reservation.reserve_date : '',
	  			time: props.reservation ? props.reservation.reserve_time : '',
	  			seats: props.reservation ? props.reservation.seats : '',
				mesa_id: props.reservation ? props.reservation.mesa_id : '',
				id: props.reservation ? props.reservation.id : '',
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
    this.reservationEdit = this.reservationEdit.bind(this);
    this.reservationDelete = this.reservationDelete.bind(this);

    this.getAllMesas = this.getAllMesas.bind(this);
	}

  componentDidMount(){

      this.getReservation();
			this.getAllMesas();

	}


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
          this.setState({
            allReservations: res.data.reservation,
            dataLoaded: true,
            searched: true,
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
      console.log(this.state, 'this is the state from submit')
      fetch(`/api/reservations/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(),
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

    reservationEdit(data, e){
      e.preventDefault();
      console.log('reservation Edit call triggered----')
      console.log(data, 'this is data reservationstate')
     fetch(`/api/reservations/${data.id}`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
       	first_name: data.first_name,
       	last_name: data.last_name,
       	email: data.email,
       	telephone: data.telephone,
       	mesa_id: data.mesa_id,
       	reserve_date: data.reserve_date,
       	reserve_time: data.reserve_time,
       	seats: data.seats
       }),
      }).then(res => res.json())
        .then(res => {
        	console.log('reservation editor res value is ', res)
        	console.log( data, 'this is the data');
          this.setState({
            reservationStatus: 'edit',
            reservation: res.data
          })

         this.getReservationByEmail()
       }).catch(err=> console.log(err))
    }


    reservationDelete(id) {
       console.log('reservation deleted')
       fetch(`/api/reservations/${id}`, {
         method: 'DELETE',
       }).then(res => res.json())
         .then(res => {
          console.log(res, 'this is res from delete method')
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

	      {this.state.dataLoaded ? (
        <SearchByEmail  handleInput={this.handleInputChange}

	                  getReservationByEmail={this.getReservationByEmail}
	                  allReservations={this.state.allReservations}
	                  dataLoaded={this.state.dataLoaded}
	                  searched={this.state.searched}
	                  reservationStatus={this.state.reservationStatus}
	                  reservationEdit={this.reservationEdit}
	                  reservationDelete={this.reservationDelete}
	                  state={this.state} />
                   ) : (
                  <p>Loading reservation data...</p>
                   )}
      </div>

	  )
	}
}
export default Reservation;
