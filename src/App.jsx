import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'



function App() {
  console.log("imported data:",puppyList)
  const [puppies, setPuppies] = useState(puppyList);
  
  return (
    <>
    {//Refactor the Starting Point
    } <div>
      {puppyList.map((puppy =>{
        return <p key={puppy.id}>{puppy.name}</p>
      }))}
      </div>
    </>
  )
}

export default App
