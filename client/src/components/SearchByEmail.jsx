import React, { Component } from 'react';
import ListedReservations from './ListedReservations';

class SearchByEmail extends Component {
	constructor(props) {
		super(props)
		console.log(this, 'is the this value')
		console.log(this.props, 'are the props') }
	

   reservationEdit(method, e, data){
     fetch('/api/tweeds', {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     	}).then(res => res.json())
       	.then(res => {
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
         this.getReservationByEmail();
 	  	}).catch(err => console.log(err));
 	 }

  	render() {
  		return(
    	<div className='searchByEmail'>
			<form className="search-email" onSubmit={(e) => (e.preventDefault(), console.log(this.props), this.props.getReservationByEmail(this.props.value))} >
				<input type="text" name="email"
				placeholder="Search for reservation by email here!"
				onChange={this.props.handleInput} />
				<input type="submit" value="Search" 
				onClick={(e) => this.props.getReservationByEmail(e.target.value)} />  
			</form>
			
			{this.props.searched ? (
				<ListedReservations allReservations={this.props.allReservations}/>
				) : (
				<p hidden>loading all them rezervations</p>
				)}
    	</div>
  		)
	}
}	

export default SearchByEmail;
