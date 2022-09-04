import axios from 'axios'
import React, { useEffect,  useState } from 'react'

export const App = () => {
  const [data, setData] = useState([])

useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/users').then(fozil => console.log(fozil.data))
}, [])


const getDelite = (ids) =>{
  const newData = data.filter((value)=> value.id !== ids)
  setData(newData)
}
  return (
    <div> 
      
      {
        data.map((value) =>{
          return <div key={value.id}>{value.id}{value.name }
           <button onClick={()=>getDelite(value.id)} >delite</button>
          </div>

        })
      }

    </div>
  )
}

export default App