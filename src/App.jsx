import './App.css'
import {puppyList} from './data.js'
import {useState} from 'react'



function App() {
  console.log("imported data:",puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);{//add functionality 
  }
  const featuredPup = puppies.find((pup)=> pup.id ===featPupId);
  console.log("featuredpup:", featuredPup);
                                                

  
  return (
    <>
    {//Refactor the Starting Point
    } <div>
      {puppyList.map((puppy =>{
        return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      }))}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email:{featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </>
  )
}

export default App
