import React, { useState } from 'react'
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi';

function Header() {
  const [MenuOpened, setMenuOpened] = useState(false);
  const getMenuStyle=(MenuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right: !MenuOpened&&"-100%"}
    }

  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerwidth  h-container">
            <img src="./logo.jpg" alt="logo" width={100}/>
            <div className=" flexCenter h-menu"
            style={getMenuStyle(MenuOpened)}>
               <a href=''>our value</a>
               <a href=''>Get started</a>
               <a href=''>our services</a>
               <a href=''>about us</a>
               <button className="btn">Contact</button>
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>

        </div>
        
    </section>
  )
}

export default Header
