import React from 'react'
import '../css/contact.css'
import phone from '../img/phone.png'
import email from '../img/email.png'
import address from '../img/address.png'
function Contact() {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +91 91756 93290
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={email} alt="" />
                            nikhilmoury65@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={address} alt="" />
                            Ulhasnagar,Thane,Maharastra
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
