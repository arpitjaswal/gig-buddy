import React from 'react'
import NavBar from './NavBar';
const Timeline = () => {
   const year = new Date().getFullYear();
   const data = [
    {
        title: "Seedhe Maut Tour",
        description: "Seedhe Maut is a hip hop duo from New Delhi, India, consisting of Siddhant Sharma and Abhijay Negi. The two met at Spit Dope Inc., a Delhi underground battle rap league organised by MC Kode and Encore ABJ.",
        date: "4 March, 2024"
    },
    {
        title: "Tech Conference 2024",
        description: "Join industry leaders at the annual Tech Conference to discuss the latest trends in AI, blockchain, and cybersecurity. Network with professionals and gain insights from expert speakers.",
        date: "12 April, 2024"
    },
    {
        title: "Art Expo 2024",
        description: "Explore contemporary art from around the world at the annual Art Expo. Featuring works from emerging and established artists, the event offers a unique opportunity to experience the diverse world of modern art.",
        date: "23 May, 2024"
    },
    {
        title: "Food Festival",
        description: "Indulge in a culinary adventure at the city's annual Food Festival. Taste dishes from various cultures, attend cooking workshops, and enjoy live music performances.",
        date: "15 June, 2024"
    },
    {
        title: "Marathon 2024",
        description: "Participate in the annual marathon and run through the city's historic landmarks. Whether you're a seasoned runner or a beginner, join us for a day of fitness and fun.",
        date: "30 July, 2024"
    }
];

  return (
    <>
      <NavBar currentPage="timeline"/>
    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
    
      <div style={{textAlign:"center", width:"80vw",overflowY:"scroll" }}>
      <h6 style={{fontWeight:"bold", fontSize:"30px"}}>upcoming events</h6>
      <br/>
      <div style={{ maxHeight: "80vh", overflowY: "scroll" }}>
      {
          data.map((item)=>{
             return(
              <div style={{ width: "100%", marginBottom: "20px" }}>
              <h5 style={{fontWeight:"bold", fontFamily:"sans-serif",color:"red" }}>{item.title}</h5>
              <h2>{item.date}</h2>
              <h1>{item.description}</h1>
              <br/>
            </div>
             )
          })
        }
      </div>
   
      </div>
    </div>
    </>
    
  )
}

export default Timeline