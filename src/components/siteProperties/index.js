import React from 'react'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons'

const index = () => {
  return (
    <div className='site-properties-con container shadow-item'>
        <div className='row site-properties'>
            <div className='site-property col-12 col-sm-6 col-lg-3'>
                <div className='item-icon'>
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <h6 className='item-title text-center'>Free Delivery</h6>
                <p className='text-center'>Free Shipping on all order</p>
            </div>
            <div className='site-property col-12 col-sm-6 col-lg-3'>
                <div className='item-icon'>
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <h6 className='item-title text-center'>Free Delivery</h6>
                <p className='text-center'>Free Shipping on all order</p>
            </div>
            <div className='site-property col-12 col-sm-6 col-lg-3'>
                <div className='item-icon'>
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <h6 className='item-title text-center'>Free Delivery</h6>
                <p className='text-center'>Free Shipping on all order</p>
            </div>
            <div className='site-property col-12 col-sm-6 col-lg-3'>
                <div className='item-icon'>
                    <FontAwesomeIcon icon={faTruck}/>
                </div>
                <h6 className='item-title text-center'>Free Delivery</h6>
                <p className='text-center'>Free Shipping on all order</p>
            </div>
        </div>
    </div>
  )
}

export default index