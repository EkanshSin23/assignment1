import React, { useContext } from 'react'
import { User } from '../../context/context'
import './sidebar.scss'
import 'animate.css';
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const { sidebar } = useContext(User)
    return (
        <div className={sidebar ? ' animate__animated animate__fadeInLeft show sidebar' : 'sidebar'}>
            <div className="logo"> <Link to='/' style={{ textDecoration: "none", color: "#4A92F0" }}>LOGO HERE</Link></div>
            <ul>
                <Link className='navlink' to='/pagetwo' ><li>Page 2</li></Link>
                <Link className='navlink' to='/pagethree' ><li>Page 3</li></Link>
                <Link className='navlink' to='/pagefour' ><li>Page 4</li></Link>
                <Link className='navlink' to='/pagefive' ><li>Page 5</li></Link>
            </ul>
        </div >
    )
}

export default Sidebar