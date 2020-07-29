import React from 'react';
import Logo from '../../assets/img/oneflix.png';
import './menu.css';
import Button from '../Button';


function Menu() {
  return (
   
    <nav className= 'Menu'>
        <a href="/">
        <img className="Logo" src ={Logo} alt="Oneflix Logo"/>
        </a>
        <Button as="a" className='ButtonLink' href='/'>
           Novo Video
            
        </Button>

    </nav>

  );
}

export default Menu;