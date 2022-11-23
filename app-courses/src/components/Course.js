import Part from './Part'
import Header from './Header'
import Total from './Total'

const Course = ({ course }) => {  
    
  return (
    <>
      {
        course.map(asignature => (          
          <div key={asignature.id}>
            <Header 
              key={asignature.id}
              asignatureTitle={asignature.name}
            /> 
            {
              asignature.parts.map(parts => (
                <div key={parts.id}>
                  <Part 
                    key={parts.id}
                    partsName={parts.name}
                    partsExercises={parts.exercises}
                  />                  
                </div>  
              ))              
            }             
            <Total 
              asignature={asignature}
            />                            
          </div>
        ))        
      }       
    </>
  ) 
}

export default Course