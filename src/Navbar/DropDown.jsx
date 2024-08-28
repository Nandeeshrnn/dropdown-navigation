import React, { useState } from 'react'
import './DropDown.css'
import { NavItems } from './NavItems'
import { NavLink } from 'react-router-dom'


const DropDown = () => {
    const [click, setClick] = useState(false)
const handleClick=()=>{
    setClick(!click)
}

  return (
   <>
    <ul onClick={handleClick} className={click ? "submenu clicked" : "submenu"}>
        {
          NavItems.map((item,index)=>{
            return(
                <li key={index}>
                    <NavLink to={item.path} className={item.cName}>
                        {item.title}
                    </NavLink>
                </li>
            )
          })
        }
    </ul>
   </>
  )
}

export default DropDown