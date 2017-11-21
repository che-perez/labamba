import React, { Component } from 'react';
import ListedReservations from './ListedReservations';

class SearchByEmail extends Component {
	constructor(props) {
		super(props)
		console.log(this, 'is the this value')
		console.log(this.props, 'are the props') }
	

  	render() {
  		return(
    	<div className='searchByEmail'>
			<form className="search-email" onSubmit={(e) => (e.preventDefault(), 
				console.log(this.props), 
				this.props.getReservationByEmail(this.props.value))} >
				<input type="text" name="email"
				placeholder="Search for reservation by email here!"
				onChange={this.props.handleInput} />
				<input type="submit" value="Search" 
				onClick={(e) => this.props.getReservationByEmail(e.target.value)} />  
			</form>
			
			{this.props.searched ? (
				<ListedReservations allReservations={this.props.allReservations}
				reservationStatus={this.props.reservationStatus}
				handleInput={this.props.handleInput}
				reservationEdit={this.props.reservationEdit}
				reservationDelete={this.props.reservationDelete}/>
				) : (
				<p hidden>loading all them rezervations</p>
				)}
    	</div>
  		)
	}
}	

export default SearchByEmail;
