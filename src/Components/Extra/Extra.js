import React from 'react'
import './Extra.css';
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";


export default function Extra() {
  return (
    <section className="extra-wrapper">
        <div className="padding innerwidth flexCenter extra-container">
            <div className=" flexColStart Extra-left">
            <div className="Extra-title">
                <div className="bluecircle"></div>
                <h1>Discover<br/> the property<br/> you like</h1>
            </div>
            <div className=" flexColStart Extra-desc">
                <span><i><h3>choose your favourite property that you like..</h3></i></span>
                <span><i><h3>Every property has affordable price .</h3></i></span>
            </div>

            <div className=" flexCenter searchBar">
                <HiLocationMarker color="blue" size={25}>
                    

                </HiLocationMarker>
                <input type="text"/>
                    <button className="btn">search</button>
            </div>

            <div className="flexCenter stat">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={8500} end={9000} duration={4}/>
                    
                    <span>+</span> </span>
                    <span>premium properties</span>
                </div>
            </div>

            <div className="flexCenter stat">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={100} end={500} duration={4}/>
                    
                    <span>+</span> </span>
                    <span>Happy Customers</span>
                </div>
            </div>

            <div className="flexCenter stat">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={10} end={15} duration={4}/>
                    
                    <span>+</span> </span>
                    <span>Award Winning</span>
                </div>
            </div>

            
            
            </div>
            <div className="flexCenter Extra-right">
            <div className="image-container">
                <img src="./download.jpg" alt=""/>
            </div>
        </div>
        </div>
    </section>
  )
}
