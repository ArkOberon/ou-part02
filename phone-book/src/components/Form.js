import React from 'react'

function Form({ 
  handleNameChange, 
  handleSubmit, 
  newName,
  newPhone,
  handlePhoneChange 
}) {
  return (
    <>
      <h2>Add New Contacts</h2>
      <form onSubmit={handleSubmit} >
        <div>
          name: 
          <input 
            type="text" 
            value={newName} 
            onChange={handleNameChange}
          />
        </div>
        <div>
          phone: 
          <input 
            type="text" 
            value={newPhone} 
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>      
      </form>
    </>
  )
}

export default Form
