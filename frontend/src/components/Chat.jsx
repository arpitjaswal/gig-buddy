
import Navbar from "./../components/NavBar"

const Chat = () => {
  return (
    <>
    <Navbar currentPage='chat'/>
      <div style={{display:"flex", justifyContent:"center", height:"100%", width:"100vw", backgroundColor:"orangered"}}>
          <div id="header" style={{height:"100vh"}}>
            <h1 style={{fontFamily:"fantasy", fontSize:"50px"}}>Chat Room</h1>

            </div>
      </div>
    </>
  )
}

export default Chat