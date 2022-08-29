import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './pagefive.scss'
import Sidebar from '../../components/sidebar/Sidebar';

const Pagefive = () => {
    return (
        <div className='pagefive'>
            <Navbar />
            <Sidebar />
            <div className="pagefive_container">

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
                            <div className="heading"> <h1>New Password </h1>
                                <p>Please enter your new password </p>
                            </div>

                            <div className="input_div">
                                <label htmlFor="new_password" >New password</label>
                                <input type="password" id="new_password" placeholder='****' />
                                <label htmlFor="confirm_password" >Confirm password</label>
                                <input type="password" id="confirm_password" placeholder='****' />
                            </div>




                            <button>Reset</button>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Pagefive