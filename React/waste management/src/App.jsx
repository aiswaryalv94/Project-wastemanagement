import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Topheader from './Components/Topheader/Topheader'
import LandingPage from './pages/Landingpage/LandingPage'
import Contact from './pages/Contact/Contact'
import Sustainability from './pages/Sustainability/Sustainability'
import UserLogin from './pages/UserLogin/UserLogin'
import UserRegistration from './pages/UserReg/UserRegistration'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/topheader' element={<Topheader/>}></Route>
      <Route path='/' element={<><Topheader/><Header/><LandingPage/><Footer/></>}></Route>
      <Route path='/contact' element={<><Topheader/><Header/><Contact/><Footer/></>}></Route>
      <Route path='/sustain' element={<><Topheader/><Header/><Sustainability/><Footer/></>}></Route>
      <Route path='/userlogin' element={<UserLogin/>}></Route>
      <Route path='/userregistration' element={<UserRegistration/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
