import './index.scss';
import React from 'react'
import siteLogo from '../../assets/images/logo.webp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const index = () => {
  return (
       <nav className="navbar shadow-item navbar-expand-md navbar-light container justify-content-between">
           <a className="navbar-brand" href="#">
            <img src={siteLogo} alt="Logo Image"/>
           </a>
           <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
            </button>
           <div className="collapse navbar-collapse ms-auto" id="collapsibleNavId">
               <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                   <li className="nav-item">
                       <a className="nav-link active" href="#" aria-current="page">Home</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#">Shop</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#">Blog</a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#">Contact</a>
                   </li>
                   <li className="nav-item d-flex">
                       <a className="nav-link me-2 nav-cart-btn" href="#">
                            <FontAwesomeIcon icon={faCartShopping}/>
                       </a>
                       <a className="nav-link nav-search-btn" href="#">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                       </a>
                   </li>
                  
               </ul>
           </div>
       </nav>
  )
}

export default index