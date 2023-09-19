import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import { Routes, Route } from "react-router-dom"
import Search from "./pages/Search"
import SingleJob from "./pages/SingleJob"
function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/search" element={<Search/>} />
      <Route path='/job/:slug' element={<SingleJob/>} />
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
