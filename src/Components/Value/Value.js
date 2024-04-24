import React from 'react'
import {Accordion,AccordionItem, AccordionItemHeading,AccordionItemPanel,AccordionItemState, AccordionItemButton} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from '../../utils/Accordion';
import { useState } from 'react';

const Value = () => {
    const [className, setClassName] = useState(null)
  return (
    <div className="v-wrapper">
        <div className="paddings innerwidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src='main3.jpg' alt=""/>

                </div>
            </div>

            <div className="flexColStart v-right">
                <span className='orangeText'>our projects</span>
                <span className='orangeText'>choose your dream home</span>
                <span className='primaryText'>we always help you to find the property you like
                    <br/> your feedback matters us most .
                </span>
                <Accordion className='accordion' alloweMultipleExpanded={false} preExpanded={[0]}>
                    {
                        data.map((item,i)=>{
                           
                            return(
                                <AccordionItem className={'accordionitem $ {className}'} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionbutton'>
                                        <AccordionItemState>
                                         {({expanded})=>expanded?
                                         setClassName("expanded"):
                                         setClassName("collapsed")}
                                         </AccordionItemState>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className='primaryText'> {item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton >
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>

                                    </AccordionItemPanel>


                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Value
