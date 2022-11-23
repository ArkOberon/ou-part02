import React from 'react'

const Part = ({ partsName, partsExercises }) => {
  return (
    <>
      <div>{partsName}: {partsExercises}</div>
    </>
  )
}

export default Part