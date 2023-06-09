import React from 'react'
import myImage from './assets/file-sharing.png'
import './App.css'
import logo from './assets/file.png'
import { useRef, useState, useEffect } from 'react'
import { uploadFile } from './services/api'

const App = () => {
    const [file, setFile] = useState('')
    const [result, setResult] = useState('');
    const fileRef = useRef();

    useEffect(() => {
      const getImage = async ()=> {
        if(file){
          const data = new FormData();
          data.append("name", file.name);
          data.append("file",file);
          const response = await uploadFile(data);
          // setResult(response.path)
        }
      }
      getImage();
    }, [file])
    
    const onUploadClick =() => {
      fileRef.current.click();
    }

    console.log(file)
  return (
    <div className='container' >
      <img src={myImage} alt="myImage" />
      <div className='wrapper'>
        <img src={logo} alt="logo" /> 
        <input type="file" ref={fileRef} style={{display: 'none'}} onChange={(e)=> setFile(e.target.files[0])} />
        <p style={{fontFamily: 'sans-serif', fontWeight:'bold'}}>Upload your documents here</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  )
}

export default App

