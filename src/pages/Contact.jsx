import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
        <Navbar sub={'home'}/>
        <div className="contact_us-container">
            <div className="left">
              <div className="inner">
                <div className="heading">
                  Get In Touch!
                </div>
                <div className="desc">
                We are help for you! How can we help you?
                </div>
                <input type="text" placeholder='Email Address' />
                <textarea name="" id="" cols="30" rows="8" placeholder='Your Message'></textarea>
                <button>Mail Us</button>
              </div>

            </div>
            <div className="right">
                <img src="/contactus.svg" alt="" />
            </div>
          
        </div>
    </>
  )
}
