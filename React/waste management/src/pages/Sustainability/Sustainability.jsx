import React from 'react'
import './sustainability.css'
import image from '../../assets/sustainpagepic1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Sustainability() {
  return (
    <div>
      
       <div className='sustain-head'>
                <p className='sustain-headingone'>Recycling at Home</p>
                <p className='sustain-headingtwo'>Lead the way to a more sustainable household by educating your family, friends and</p>
                <p className='sustain-headingthree'>co-workers on how to differentiate between recyclable and non-recyclable materials.</p>
            </div>
            <div className='sustain-image'>
                <div className="container">

                    <div className="image-box">
                        <img src={image} alt="profile" className="overlap-square" />
                    </div>
                    <div className="text-box">
                        <p className='sustain-overlaptext1' >How to Organize Your</p>
                        <p className='sustain-overlaptext2'>Recycling</p>
                        <p className='sustain-overlaptext3'>Spread the recycling love: Add two bins throughtout rooms in your house</p>
                        <p className='sustain-overlaptext3'>such as the home office, bathrooms and garage. Watch the video for more</p>
                        <p className='sustain-overlaptext3'>tips and guidelines.</p>
                    </div>
                </div>


            </div>
            <div className='sustain-body'>
                <p className='sustainbody-firstline'>Posters, Guides & Other Tools</p>
            </div>

            <div>
                <div className="container-box">

                    <div className="container text-center">
                        <div className="row row-cols-4 gx-4 gy-4">
                            <div className="col">
                                Poster: What's Recyclable at Home
                                <p className='col-content'>Learn which materials go into your recycling container and which do not.</p>
                            </div>
                            <div className="col">
                                Poster: What's Recyclable at Home (Glass Not Accepted)
                                <p className='col-content'>Glass recycling rules vary, so please check your local program guidelines to know which materials go into your recycling container.</p>
                            </div>
                            <div className="col">
                                Poster: Most Common Contaminants
                                <p className='col-content'>Find out which items cause recycling contamination and what to do with them instead.</p>
                            </div>
                            <div className="col">
                                5 Steps to Get Started Recycling
                                <p className='col-content'>Follow these 5 easy steps to set up your recycling for success.</p>
                            </div>
                            <div className="col">
                                What it Means to Recycle Right Brochure
                                <p className='col-content'>Learn more about the benefits of recycling and find the recycling rules.</p>
                            </div>
                            <div className="col">
                                What it Means to Recycle Right Brochure (Glass Not Accepted)
                                <p className='col-content'>Glass recycling rules vary, so please check your local program guidelines. Learn more about the benefits of recycling and find the right recycling rules.</p>
                            </div>
                            <div className="col">
                                 The Three Rules of Recycling Graphic
                                <p className='col-content'>Simplify your recycling process with 3 simple rules.</p>
                            </div>
                            <div className="col">
                                Recycling Myths
                                <p className='col-content'>Become the expert and uncover the truth about common recycling myths.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            
    </div>
  )
}

export default Sustainability
