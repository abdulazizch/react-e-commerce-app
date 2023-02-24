import React from 'react'
import './index.scss'
import bannerImg from '../../assets/images/banner-img.webp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/index';

const index = () => {
  return (
      <header className='hero-section'>
        <Navbar/>
        <div className='section-banner container'>
            <div className='row'>
                <div className='section-text col-12 col-md-5'>
                    <h1>Nike New Collection</h1>
                    <p className='col-11'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <div className='add-to-bag-btn'>
                        <button className='btn-icon'>
                            <FontAwesomeIcon icon={faPlus} color="currentColor" />
                        </button>
                        Add to bag
                    </div>
                </div>
                <div className='section-img col-12 col-md-7'>
                    <img src={bannerImg} className='img-fluid' alt='Banner Img'/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default index