// import React from 'react'
// import Button from './Button'
import { useState } from 'react'


const Home = () => {
  //  const state = useState(0)
  //  const state1 = useState[0] // initial value
  //  const state2 = useState[1] // function
 const [count, setCount] = useState(10)
   return (
    <div>
       <h1>{count}</h1>
    <botton onClick={()=>setCount(count-1)}>-</botton> 
    

    </div>
   )
}

export default Home
