import React from 'react'

function Persons( { persons } ) {    

  return (
    <>     
      <p><b>Name:</b>{persons.name} </p>  
      <p><b>Phone Number:</b>{persons.phone}</p>              
    </>
  )
}

export default Persons
