import Calender from "./components/Calender"
import Chat from "./components/Chat"
import Contact from "./components/Contact"
import Four04 from "./components/Four04"
import Gigs from "./components/Gigs"
import  NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/four04" element={<Four04 />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calender" element={<Calender />} />
      </Routes>
    </>
  )
}

export default App
