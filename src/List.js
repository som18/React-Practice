import React from 'react'

export default function List() {
   const items = ['it1','it2','it3','it4','it5'] 
  return (
    <div>
      <ul>
        {items.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
