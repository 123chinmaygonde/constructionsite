import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
   <section className="f-wrapper">
    <div className="paddings innerwidth flexCenter f-container">
        <div className="flexColStart f-left">
            <img src="./logo.jpg" alt=''/>
            <span className="secondaryText">
                our vision is to provide you the best property
                in market
            </span>
        </div>

        <div className="flexColStart f-right">
            <span className='primaryText'>Location</span>
            <span className='secondaryText'>pune , maharashtra</span>
        </div>
        <div className="flexCenter f-menu">
            <span>our properties</span>
            <span>our vision</span>
            <span>About us</span>
            <span>Contact us</span>
        </div>

    </div>
   </section>
  )
}

export default Footer
