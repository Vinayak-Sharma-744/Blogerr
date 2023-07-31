import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navCont'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/create">Create</Link></li>
        </ul>
    </div>
  )
}

export default Navbar