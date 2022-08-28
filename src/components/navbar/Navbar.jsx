import React, { useState } from 'react'
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    // const [show, setshow] = useState(false)

    return (
        <div className='navbar'>
            <div className="navbar_container">
                <div className="left">
                    <span className="logo">LOGO HERE</span>

                </div>
                <div className="center">
                    <span className="nav">HOME</span>
                    <span className="nav">PAGE NO.2</span>
                    <span className="nav">PAGE NO.3</span>

                </div>
                {/* <div className={show ? "show show_nav" : "show_nav"}>
                    <span className="nav">HOME</span>
                    <span className="nav">PAGE NO.2</span>
                    <span className="nav">PAGE NO.3</span>
                </div> */}
                <div className="right">
                    <button className='sign_login'>Signup</button>
                    <button className='sign_login'>Login</button>
                    <button className='menu_icon' ><MenuIcon /></button>
                </div>
            </div>
        </div >
    )
}

export default Navbar