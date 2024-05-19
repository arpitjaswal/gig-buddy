import Calender from "./components/Timeline"
import Chat from "./components/Chat"
import Contact from "./components/Contact"
import EventPage from "./components/EventPage"
import Four04 from "./components/Four04"
import Gigs from "./components/Gigs"
import  NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import UnderConstruction from "./components/UnderConstruction"
import ReSell from "./components/ReSell"
import LandingPage from "./components/Landingpage"
import SignUp from "./components/authentication/SignUp"
import Login from "./components/authentication/Login"

function App() {


  return (
    
    <>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path="/resell" element={<ReSell />} />
          <Route path="/four04" element={<Four04 />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/eventpage" element={<EventPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/timeline" element={<UnderConstruction />} />
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
