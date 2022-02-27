import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'


export default function NavbarPage() {
  return (
  <nav>
      <div className="navbar">
        <Link to='/'> <HomeIcon className="homeicon"/></Link>
          <Link to='/'><p>Home</p></Link>
          
         <Link to='/pricechart'> <p>Price Chart</p></Link>
         <Link to='/crudapp'>  <p>CRUD Application</p></Link>
      </div>

  </nav>
  )
}
