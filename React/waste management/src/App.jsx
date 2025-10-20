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
import Commercial from './pages/Commercial/Commercial'
import Residential from './pages/Residential/Residential'
import AdminLogin from './pages/Adminpages/Adminlogin/AdminLogin'
import CollecterLogin from './pages/CollecterPages/CollecterPageLogin/CollecterLogin'
import CollecterRegistration from './pages/CollecterPages/CollecterRegistration/CollecterRegistration'
import AdminDashboard from './pages/Adminpages/Admindashboard/AdminDashboard'
import CollecterDashboard from './pages/CollecterPages/CollecterPageDashboard/CollecterDashboard'
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
      <Route path='/commercial' element={<><Topheader/><Header/><Commercial/></>}></Route>
      <Route path='/residential' element={<Residential/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/collecterlogin' element={<CollecterLogin/>}></Route>
      <Route path='/collecterregistration' element={<CollecterRegistration/>}></Route>
      <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
      <Route path='/collecterdashboard' element={<CollecterDashboard/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
