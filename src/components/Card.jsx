// import React from 'react'
import { useContext } from "react"
import { DataContext } from "../providers/DataContext"

const Card = () => {
  const{count, someFunction, arrayEx} = useContext(DataContext)
// console.log(count, someFunction, arrayEx)
  return (
   
  <div>
    <h1>{count}</h1>
    <button onClick={someFunction}>plus</button>
  </div>
  )
}

export default Card
