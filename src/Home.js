import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AppsIcon from '@mui/icons-material/Apps';

export default function Home() {
  return (
    <div className="home">
        <h1>Wellcome To My Task Page</h1>
        <div className="tasks">
        <Link to='/pricechart'> <LocalOfferIcon sx={{ fontSize: 40 }} className="homepageicon" /></Link><span>Price Chart</span>
         <Link to='/crudapp'> <AppsIcon sx={{ fontSize: 40 }} className="homepageicon" /> </Link><span>CRUD Application</span>
        </div>
        <div className="image">
          <img src="https://m.media-amazon.com/images/I/71F4oc+vIeL._SL1500_.jpg" alt="" />
          <img src="https://m.media-amazon.com/images/I/91ZxHKlyQ+L._SY450_.jpg" alt="" />
          <img src="https://m.media-amazon.com/images/I/915DLoQO3bL._SY450_.jpg" alt="" />
        </div>
    </div>
  )
}
