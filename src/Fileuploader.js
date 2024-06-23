import React, { useState } from 'react'

export default function Fileuploader() {
    const [file,setFile] = useState(null);

    const handlefileChange =(e)=>{
        const selectedfiles = e.target.files[0];
        setFile(selectedfiles);

    }
  return (
    <div>
      <input type='file' accept='image/*' onChange={handlefileChange}/>
      {file && <img src={URL.createObjectURL(file)} alt='Uploaded' />}
    </div>
  )
}
