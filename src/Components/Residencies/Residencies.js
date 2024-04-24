import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import "./Residencies.css";
import data from '../../utils/Slider.json';
import { slidersettings } from '../../utils/Comman';




const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerwidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            <Swiper{...slidersettings}>

            <SliderButtons/>
             {data.map((card, i) => (
        <SwiperSlide key={i}>
            <div className="flexColStart r-card">
                <img src={card.image} alt=""/>
                <span className="secondaryText r-price">
                    <span>$</span>
                    <span>{card.price}</span>
                </span> 
                
                <span className="primaryText">
                    {card.name}
                </span>
                <span className="secondaryText">
                    {card.detail}
                </span>
            </div>
            </SwiperSlide>
               ))}

       </Swiper>
        </div>

        
    </section>

    
  )
}

export default Residencies

const SliderButtons=()=>{
    const Swiper = useSwiper();
    return(
        <div className="flexCenter r-button">
            <button onClick={()=>Swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>Swiper.slideNext()}>&gt;</button>
        </div>

    )
}
