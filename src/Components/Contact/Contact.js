import React from 'react'
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {HiChatBubbleBottomCenter} from 'react-icons/hi';
import {BsFillChatDotsFill} from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            <div className=" flexColStart c-left">
                <span className='orangeText'>connect with us</span>
                <span className='orangeText'>details :</span><br/>
                <span className='secondaryText'>if you have any query <br/>
                 reach out us at gondechinmay@gmail.com      </span>
                 <div className="flexColStart contactModes">
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>call us</span>
                                    <span>9130479467</span>
                                </div>
                            </div>
                            <div className="flexCenter button">call now</div>
                        </div>


                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>chat</span>
                                    <span>9130479467</span>
                                </div>
                            </div>
                            <div className="flexCenter button">chat now</div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./main4.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
