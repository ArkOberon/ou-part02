import Course from "./Course"

const App = () => {
  const course = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'New Buildings in Sevilla',
          exercises: 54,
          id: 4,
        },
        {
          name: 'New Buildings in Madrid',
          exercises: 94,
          id: 5,
        }
      ]  
    },
    {
      id: 2,
      name: 'Node.js',      
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },    
  ]

  return <Course course={course} />
}

export default App