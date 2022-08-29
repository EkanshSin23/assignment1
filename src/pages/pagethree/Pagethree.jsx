import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './pagethree.scss'
import GoogleIcon from '@mui/icons-material/Google';
import Sidebar from '../../components/sidebar/Sidebar';
const Pagethree = () => {
    return (
        <div className='pagethree'>
            <Navbar />
            <Sidebar />
            <div className="pagethree_container">

                <div className="main">
                    <div className="left_main">
                        <div className="colordiv"></div>
                        <div className="colordivtwo"></div>

                        <div className="top_left_main">
                            <img src="https://www.fittr.com/static/images/svg-animi/svg/forgot-password.svg" alt="" />
                        </div>
                        <div className="bottom_left_main">
                            <p className='bottom_left_main_bold'>Game to change your loream</p>
                            <p className='bottom_left_main_normal'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                        </div>
                    </div>
                    <div className="right_main">

                        <div className="login_form">
                            <div className="heading"> <h1>Enter the OTP </h1>
                                <p>Please enter the OTP recieved on <span>rcsxx@gmail.com</span></p>
                            </div>

                            <p className='before_input'>Please wait for 12 sec </p>
                            <label htmlFor="otp" >OTP</label>
                            <input type="text" id="otp" placeholder='Enter the OTP' />

                            <div className="resend">
                                <a href="#">Resend</a>
                            </div>

                            <button>Sign Up</button>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Pagethree