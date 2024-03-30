import Calender from "./components/Calender"
import Chat from "./components/Chat"
import Contact from "./components/Contact"
import EventPage from "./components/EventPage"
import Four04 from "./components/Four04"
import Gigs from "./components/Gigs"
import  NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Gigs />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          
          <Route path="/resell" element={<UnderConstruction />} />
          <Route path="/four04" element={<Four04 />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/eventpage" element={<EventPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<UnderConstruction />} />
          <Route path="/calender" element={<UnderConstruction />} />
      </Routes>
    </>
  )
}

export default App
