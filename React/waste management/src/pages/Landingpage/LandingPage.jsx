import React from 'react'
import image1 from '../../assets/old-bridge-chinese-park.jpg'
import './landingPage.css'
import waste from '../../assets/waste.jpg'
import waste1 from '../../assets/waste1.jpg'
import waste2 from '../../assets/waste2.jpg'
import waste3 from '../../assets/waste3.jpg'
import waste4 from '../../assets/waste4.jpg'
import waste5 from '../../assets/waste5.jpg'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function LandingPage() {
    return (
        <div>
            <div className='background-image-landingpage'>
                <img className="landing-page-image" src={image1} alt="landing image?" />
            </div>

            <div className='firstline'>
                <p className='sustainabilty'>2025 Sustainability Report</p>
                <p className='we-are-driving'>We're Driving Sustainability</p>
                <div className='third-line'>
                    <p>We're working toward a future where materials are repurposed, energy is</p>
                    <p>renewable and communities are thriving.</p>
                </div>
            </div>


            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">


                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <img src={waste} className="carousel-img" alt="..." />
                            <img src={waste1} className="carousel-img" alt="..." />
                            <img src={waste2} className="carousel-img" alt="..." />
                        </div>
                    </div>


                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <img src={waste3} className="carousel-img" alt="..." />
                            <img src={waste4} className="carousel-img" alt="..." />
                            <img src={waste5} className="carousel-img" alt="..." />
                        </div>
                    </div>

                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
            <div className='horizontal-line'>
                <hr/>
            </div>

           <div className="footerarrangement">
  <div className="footer-header">
    <h1 className="footer-logo">WM</h1>
    <hr className="footer-line" />
  </div>

  <div className="footer-columns">
    <div className="footer-column">
      <h4 className="footertext">FAQ</h4>
      <h4 className="footertext">Investor Relations</h4>
      <h4 className="footertext">Privacy</h4>
      <h4 className="footertext">Speed Test</h4>
    </div>
    <div className="footer-column">
      <h4 className="footertext">Help Centre</h4>
      <h4 className="footertext">Jobs</h4>
      <h4 className="footertext">Cookie Preferences</h4>
      <h4 className="footertext">Legal Notices</h4>
    </div>
    <div className="footer-column">
      <h4 className="footertext">Account</h4>
      <h4 className="footertext">cqwc</h4>
      <h4 className="footertext">Corporate Information</h4>
      <h4 className="footertext">Only</h4>
    </div>
    <div className="footer-column">
      <h4 className="footertext">sqd</h4>
      <h4 className="footertext">Terms of Use</h4>
      <h4 className="footertext">Contact Us</h4>
    </div>
  </div>
</div>


        </div>
    )
}

export default LandingPage
