import React,  { useState } from 'react'
import '../styles/nav.css';
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"


const Nav = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <>
    <div className="menu">
    <img src={menu} onClick={()=>setShowmenu(!showMenu)} alt="" />
    </div>
  
    <div className={`nav ${showMenu ? 'active' : ''}`}>
      <img src={close}  onClick={()=>setShowmenu(!showMenu)} alt="" />
<div className="nav-links">
  {/* Add data-text and wrap the word in a span */}
  <li data-text="Home"><span className="rolling-text">Home</span></li>
  <li data-text="About"><span className="rolling-text rolling-text-1">About</span></li>
  <li data-text="Projects"><span className="rolling-text rolling-text-2 ">Projects</span></li>
</div>
    <div className="btn">
      <button><li data-text="contact-btn" className='contact-btn'><span className="rolling-text rolling-text-contact">Contact</span></li></button>
    </div>
    </div>

    
    </>
  )
}

export default Nav