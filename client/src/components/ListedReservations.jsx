import React from 'react';
import ReservationInfo from './ReservationInfo'

function ListedReservations(props){
  return(
    <div className='listedReservations'>
		    	{console.log(props)}    
		    	{props.allReservations.map(reservation => {
        			return <ReservationInfo key={reservation.id} 
        			reservationStatus={props.reservationStatus} 
        			reservation={reservation} 
        			handleInput={props.handleInput}
        			reservationEdit={props.reservationEdit}
        			reservationDelete={props.reservationDelete}/>
      })}

    </div>
  )
}

export default ListedReservations;



