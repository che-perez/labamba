import React from 'react';
import ReservationInfo from './ReservationInfo'

function ListedReservations(props){
  return(
    <div className='listedReservations'>
		    	{console.log(props)}    
		    	{props.allReservations.map(reservation => {
        			return <ReservationInfo key={reservation.id} reservation={reservation} />
      })}

    </div>
  )
}

export default ListedReservations;



