import React, { useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar';
import intro from '../assets/intro.mp4';

const Landingpage = () => {
  const videoRef = useRef(null);
  const navigate= useNavigate();
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
      video.play();
    }
  };

  return (
    <>
      <NavBar currentPage='signup' />
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          volume={0.1}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={intro} type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          {isMuted && (
            <button
              style={{
                marginRight: '10px',
                padding: '15px 30px',
                fontSize: '1.2em',
                borderRadius: '8px',
                backgroundColor: 'skyblue',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'monospace',
              }}
              onClick={handlePlay}
            >
              🔊
            </button>
          )}
          {!isMuted && (
            <button
              style={{
                marginRight: '10px',
                padding: '15px 30px',
                fontSize: '1.2em',
                borderRadius: '8px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'monospace',
              }}
              onClick={handlePlay}
            >
              🔇
            </button>
          )}
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1.2em',
              marginRight: '20px',
              borderRadius: '8px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
            onClick={()=>{
              navigate("/signup")
            }}
          >
            Register
          </button>
          <button
            style={{
              padding: '15px 30px',
              fontSize: '1.2em',
              borderRadius: '8px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
            onClick={()=>{
              navigate("/login")
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
