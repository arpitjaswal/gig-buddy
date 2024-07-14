import React from 'react'
import NavBar from './NavBar';
const Timeline = () => {
   const year = new Date().getFullYear();
  return (
    <div>
      <NavBar currentPage="timeline"/>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignContent:"center"}}>
          <h1>Timeline {year}</h1>
          <div>
            <div id="header">
              <h1></h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Timeline