import React from 'react'

const Filter = ( { 
  word, 
  handleWordChange,
  setShowAll,
  showAll
 }) => {
  return (
    <>
      <h2>Filter</h2>      
      <div>         
        <input 
          type="text" 
          value={word} 
          onChange={handleWordChange}
        />
      </div>                     
      
      <div>        
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'Filtered' : 'all' }
        </button>
      </div>
    </>
  )
}

export default Filter
