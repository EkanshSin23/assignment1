import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './pagefour.scss'

import Sidebar from '../../components/sidebar/Sidebar';
const Pagefour = () => {
    return (
        <div className='pagefour'>
            <Navbar />
            <Sidebar />
            <div className="pagefour_container">

                <div className="main">
                    <div className="left_main">
                        <div className="colordiv"></div>
                        <div className="colordivtwo"></div>

                        <div className="top_left_main">
                            <img src="https://influencermediaservices.com/wp-content/uploads/content-strategies-hero.png" alt="" />
                        </div>
                        <div className="bottom_left_main">
                            <p className='bottom_left_main_bold'>Forget Password</p>
                            <p className='bottom_left_main_normal'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                    </div>
                    <div className="right_main">

                        <div className="login_form">
                            <div className="heading"> <h1>Enter the OTP </h1>
                                <p>Please enter the OTP recieved on <span>rcsxx@gmail.com</span></p>
                            </div>

                            <p className='before_input'>Please wait for 12 sec </p>
                            <label htmlFor="email" >Enter email or Mobile</label>
                            <input type="text" id="email" placeholder='xyz@gmail.com/123XXX' />
                            <label htmlFor="otp" >OTP</label>
                            <input type="text" id="otp" placeholder='Enter the OTP' />


                            <div className="resend">
                                <a href="#">Resend OTP</a>
                            </div>

                            <button>Sign Up</button>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Pagefour