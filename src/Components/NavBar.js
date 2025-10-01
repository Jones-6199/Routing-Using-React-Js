import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NavBar() {

  const NavBarStyle= ({isActive}) => {

    return {
        color: isActive ? 'red' : 'black',
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: isActive ? '30px ': '20px',

    }
  }

  return (

     <>
    <nav style={{
        display:"flex",
        justifyContent:'space-around',
        backgroundColor:'lightgrey',
        padding:'10px',
        fontSize:'20px',

    }}>
    <NavLink style={NavBarStyle} to='/'>Home</NavLink>
    <NavLink style={NavBarStyle} to='/About'>About</NavLink>
    <NavLink style={NavBarStyle} to='/Contact'>Contact</NavLink>
    <NavLink style={NavBarStyle} to='/Header'>Header</NavLink>
    <NavLink style={NavBarStyle} to='/Products'>Products</NavLink>

    </nav>
    </>
  )


}

 
