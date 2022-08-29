import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './pageone.scss'
import GoogleIcon from '@mui/icons-material/Google';
import Sidebar from '../../components/sidebar/Sidebar';
const Pageone = () => {
    return (
        <div className='pageone'>
            <Navbar />
            <Sidebar />
            <div className="pageone_container">

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
                            <div className="heading"> <h1>Login to your account </h1>
                                <p>See what is going on in game world</p>
                            </div>
                            <p className='google'><span className='icon'><GoogleIcon /></span>Continue with google</p>
                            <p className='before_input'>----or Sign in with Email----</p>
                            <label htmlFor="email" >Email/Number</label>
                            <input type="text" id="email" placeholder='xyx@gmail.com/123XXX' />
                            <label htmlFor="password">Email</label>
                            <input type="password" id="password" placeholder='Password' />
                            <div className="checkbox"><span> <input type="checkbox" id="checkbox" /><label htmlFor="checkbox" >Remember me</label></span>
                                <a href="#">Forgot Password?</a>
                            </div>

                            <button>Login</button>
                            <br />
                            <p className='last_p'>Not Registered Yet? <span>Create an account</span>  </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pageone