import React, { useState } from "react";
import './Navbar.css';
import logo from './images/logo.svg';
import close from './images/icon-menu-close.svg';
import menu from './images/icon-menu.svg';

export default function Navbar() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active)
  }

  const links = ['Home', 'New', 'Popular', 'Trending', 'Categories'];
  const listLinks = links.map((link, index) => <li key={index}><a href="#">{link}</a></li>);


  return (
    <nav className="navbar-container">
      <img className='logo' src={logo} alt="logo" />

      <div className='menu-icons'>
        <img
          onClick={toggleMode}
          className={active ? 'menu active' : 'menu'}
          src={menu}
          alt="menu icon" />

        <img
          onClick={toggleMode}
          className={active ? 'close active' : 'close'}
          src={close}
          alt="close icon" />
      </div>

      <div className={active ? 'links-container active' : 'links-container'}>
        <ul>
          {listLinks}
        </ul>
      </div>
    </nav >
  )
}