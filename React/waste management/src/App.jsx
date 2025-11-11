import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/header/Header'
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
import SidebarAdmin from './Components/SidebarAdmin/sidebaradmin'
import Sidebar from './Components/SidebarCollecter/Sidebar'
import TalePage from './Components/TalePage/TalePage'
import UserDashbrd from './pages/Userdashboard/UserDashbrd'
import SidebarUser from './Components/SidebarUser/SidebarUser'
import UserPrfile from './pages/UserPages/UserProfile/UserPrfile'
import UserForgot from './pages/UserPages/UserForgetpass/UserForgot'
import CollecterForgot from './pages/CollecterPages/CollecterForgot/CollecterForgot'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/topheader' element={<Topheader/>}></Route>
      <Route path='/talepage' element={<TalePage/>}></Route>

      <Route path='/' element={<><Header/><LandingPage/><Footer/></>}></Route>
      <Route path='/contact' element={<><Header/><Contact/><TalePage/><Footer/></>}></Route>
      <Route path='/sustain' element={<><Header/><Sustainability/><TalePage/><Footer/></>}></Route>
      <Route path='/userlogin' element={<><Header/><UserLogin/></>}></Route>
      <Route path='/userregistration' element={<><Header/><UserRegistration/></>}></Route>
      <Route path='/commercial' element={<><Header/><Commercial/><TalePage/></>}></Route>
      <Route path='/residential' element={<><Header/><Residential/><TalePage/></>}></Route>

      <Route path='/adminlogin' element={<><Header/><AdminLogin/></>}></Route>

      <Route path='/collecterlogin' element={<><Header/><CollecterLogin/></>}></Route>
      <Route path='/collecterregistration' element={<><Header/><CollecterRegistration/></>}></Route>

      <Route path='/admindashboard' element={<><SidebarAdmin/><AdminDashboard/></>}></Route>
      <Route path='/collecterdashboard/:id' element={<><Sidebar/><CollecterDashboard/></>}></Route>
      <Route path='/userdashboard/:id' element={<><SidebarUser/><UserDashbrd/></>}></Route>
      
      <Route path='/sidebaradmin' element={<SidebarAdmin/>}></Route>
      <Route path='/sidebar' element={<Sidebar/>}></Route>
      <Route path='/sidebaruser' element={<SidebarUser/>}></Route>

      <Route path='/userprofile/:id' element={<UserPrfile/>}></Route>
      <Route path='/userforgot' element={<UserForgot/>}></Route>
      <Route path='/collecterforgot' element={<CollecterForgot/>}></Route>

      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
