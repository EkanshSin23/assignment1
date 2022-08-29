import React, { useContext, useState } from 'react'
import './navbar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import { User } from '../../context/context';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { sidebar, setsidebar } = useContext(User)
    return (
        <div className='navbar' >
            <div className="navbar_container">
                <div className="left">
                    <Link to='/' style={{ textDecoration: "none", color: "#4A92F0" }}> <span className="logo">LOGO HERE</span></Link>

                </div>
                <div className="center">
                    <Link className='navlink' to='/'><span className="nav">HOME</span></Link>
                    <Link className='navlink' to='/pagetwo'>   <span className="nav">PAGE NO.2</span></Link>
                    <Link className='navlink' to='/pagethree'>  <span className="nav">PAGE NO.3</span></Link>

                    <Link className='navlink' to='/pagefour'>  <span className="nav">PAGE NO.4</span></Link>
                    <Link className='navlink' to='/pagefive'>  <span className="nav">PAGE NO.5</span></Link >

                </div>

                <div className="right">
                    <button className='sign_login' >Signup</button>
                    <button className='sign_login' >Login</button>
                    <button className='menu_icon' onClick={() => setsidebar(!sidebar)} ><MenuIcon /></button>
                </div>
            </div>
        </div >
    )
}

export default Navbar