import React from 'react';
import Logo from '../../assets/img/oneflix.png';
import './menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';


function Menu() {
  return (
   
    <nav className= 'Menu'>
        <Link to="/">
        <img className="Logo" src ={Logo} alt="Oneflix Logo" />
        </Link>
        <Button as={Link} className='ButtonLink' to='/cadastro/Video'>
           Novo Video
            
        </Button>

    </nav>

  );
}

export default Menu;