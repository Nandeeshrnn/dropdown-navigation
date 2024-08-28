import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import './Navbar.css'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)

    const mouseEnter =()=>{
        setDropdown(true)
    }
    const mouseLeave =()=>{
        setDropdown(false)
    }

  return (
    <div>
        <header>
            <h1>Logo Here</h1>
            <nav>
                <ul className='main-menu'>
                    <li>
                        <NavLink to='/' className='navItem'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='navItem'>About Us</NavLink>
                    </li>
                    <li onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <NavLink to='/service' className='navItem'>Services</NavLink>
                        {dropdown && <DropDown />}
                    </li>
                    <li>
                        <NavLink to='/product' className='navItem'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='navItem'>Contact Us</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar