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
import SidebarAdmin from './Components/SidebarAdmin/SidebarAdmin'
import Sidebar from './Components/SidebarCollecter/Sidebar'
import TalePage from './Components/TalePage/TalePage'
import UserDashbrd from './pages/Userdashboard/UserDashbrd'
import SidebarUser from './Components/SidebarUser/SidebarUser'
import UserPrfile from './pages/UserPages/UserProfile/UserPrfile'
import UserForgot from './pages/UserPages/UserForgetpass/UserForgot'
import CollecterForgot from './pages/CollecterPages/CollecterForgot/CollecterForgot'
import UserEdit from './pages/UserPages/UserEdit/UserEdit'
import AdminviewallUsers from './pages/Adminpages/AdminViewallusers/AdminviewallUsers'
import AdminviewallCollecters from './pages/Adminpages/AdminviewallCollecters/AdminviewallCollecters'
import CollecterProfile from './pages/CollecterPages/CollecterProfile/CollecterProfile'
import CollecterEdit from './pages/CollecterPages/CollecterEdit/CollecterEdit'
import HeaderExtra from './Components/HeaderExtra/HeaderExtra'
import AdminEnquiry from './pages/Adminpages/AdminEnquirypage/AdminEnquiry'
import UserPickup from './pages/UserPages/UserPickup/UserPickup'



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/topheader' element={<Topheader/>}></Route>
      <Route path='/talepage' element={<TalePage/>}></Route>
      <Route path='/headerextra' element={<HeaderExtra/>}></Route>

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

      <Route path='/admindashboard' element={<><HeaderExtra/><SidebarAdmin/><AdminDashboard/></>}></Route>
      <Route path='/collecterdashboard/:id' element={<><HeaderExtra/><Sidebar/><CollecterDashboard/></>}></Route>
      <Route path='/userdashboard/:id' element={<><HeaderExtra/><SidebarUser/><UserDashbrd/></>}></Route>
      
      <Route path='/sidebaradmin' element={<SidebarAdmin/>}></Route>
      <Route path='/sidebar' element={<Sidebar/>}></Route>
      <Route path='/sidebaruser' element={<SidebarUser/>}></Route>

      <Route path='/userprofile/:id' element={<><HeaderExtra/><SidebarUser/><UserPrfile/></>}></Route>
      <Route path='/userforgot' element={<><HeaderExtra/><SidebarUser/><UserForgot/></>}></Route>
      <Route path='/useredit/:id' element={<><HeaderExtra/><SidebarUser/><UserEdit/></>}></Route>

      <Route path='/collecterforgot' element={<><HeaderExtra/><Sidebar/><CollecterForgot/></>}></Route>
       <Route path='/collecterprofile/:id' element={<><HeaderExtra/><Sidebar/><CollecterProfile/></>}></Route>
       <Route path='/collecteredit/:id' element={<><HeaderExtra/><Sidebar/><CollecterEdit/></>}></Route>

       <Route path='/adminuserallview' element={<><HeaderExtra/><SidebarAdmin/><AdminviewallUsers/></>}></Route>
       <Route path='/adminviewallcollecters' element={<><HeaderExtra/><SidebarAdmin/><AdminviewallCollecters/></>}></Route>
       <Route path='/adminviewenquiry' element={<><HeaderExtra/><SidebarAdmin/><AdminEnquiry/></>}></Route>
      
      <Route path='/pickuprequest' element={<><HeaderExtra/><SidebarUser/><UserPickup/></>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
