import React from 'react'

const Total = ({ asignature }) => {

  const exercises = asignature.parts.map(parts => parts.exercises)  
  const total = exercises.reduce((a, b) => a + b)
 
  return (
    <p><b>Total exercises:</b>{total}</p>  
  )
}

export default Total
