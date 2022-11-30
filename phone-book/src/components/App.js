import React, { useState } from 'react'
import Persons from './Persons'
import Form from './Form'
import Filter from './Filter'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ word, setWord ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const handleWordChange = (e) => {
    setWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    const personInfo = {
      name: newName,
      phone: newPhone
    } 

    let names = persons.map(person => person.name)

    if(names.toString().includes(personInfo.name)) {

      return alert(`${personInfo.name} is already added to phonebook`)
    
    } else {

      setPersons([...persons, personInfo]) 

    }
        
    setNewName('') 
    setNewPhone('')   
  }

  const personsToShow = showAll    
    ? persons    
    : persons.filter(contact => contact.name.toLowerCase() === word.toLowerCase())
        
  return (
    <>
      <h1>Phonebook</h1>
      <Filter 
        word={word}
        handleWordChange={handleWordChange}
        setShowAll={setShowAll}
        showAll={showAll}
      />

      <Form 
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      /> 
      
      <h2>Contacts</h2>
      {
        personsToShow.map((contact) =>
          <Persons 
            key={contact.name} 
            persons={contact}
          />
        )
      }      
    </>
  )
}

export default App