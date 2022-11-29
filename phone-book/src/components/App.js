import React, { useState } from 'react'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ newName, setNewName ] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()  

    const personInfo = {
      name: newName
    }    

    let names = persons.map(person => person.name)

    if(names.toString().includes(personInfo.name)) {

      return alert(`${personInfo.name} is already added to phonebook`)
    
    } else {

      setPersons(persons.concat(personInfo)) 

    }
        
    setNewName('')    
  }

  return (
    <>
      <h2>Phonebook</h2>
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
          <button type="submit">add</button>
        </div>      
      </form>
      <h2>Numbers</h2>
      {
        persons.map((contact) =>
          <Persons key={contact.name} persons={contact}/>
        )
      }      
    </>
  )
}

export default App