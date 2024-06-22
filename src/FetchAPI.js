import React, { useEffect, useState } from 'react'

export default function FetchAPI() {

  const[data,setData] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response)=> response.json())
        .then((json)=>setData(json))
    },[])
  return (
    <div>{
      
      data ? (
        <div>
          Title :{data.title}

        </div>
      ): (
        <p>
          Loading...
        </p>
      )
    }
    </div>
  )
}
