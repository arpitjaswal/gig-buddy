import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Four04 = () => {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();
  const [dogImage,setDogImage] = useState("https://media.istockphoto.com/id/454238885/photo/pug-puppy-dog.jpg?s=612x612&w=0&k=20&c=Da9JqQ3ViGeNvM6IPGBprXBt8PLSQ8_rPgvYWhEtpHU=")

  useEffect(()=>{
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
      if(res){
        if(res.data){
          setDogImage(res.data.message)
        }
      }
    })
  },[seconds])
  
  setTimeout(()=>{
      setSeconds(seconds-1);
      if(seconds==0){
        navigate("/login")
      }
  },1000)


  return (


    <>

    <NavBar currentPage='login'/>

    <div style={{display:"flex", flexDirection:"column", margin:"100px", padding:"100px"}}>
      <img src={dogImage} style={{width:"200px", height:"200px"}}></img>
    <h1 style={{fontFamily:"monospace", color:"red", fontSize:"40px"}}>How the fuck you ended up here, bud?</h1>
    <h6 style={{fontFamily:"fantasy", fontSize:"40px"}}>redirecting you to the login page in {seconds} seconds!</h6>
    </div>
    
    </>
  )
}

export default Four04