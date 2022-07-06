import React from 'react';
import cl from './Logo.module.css';
import {Link} from 'react-router-dom';
  
const Logo = () => {
return (
    <Link to="/" className={cl.logo}>
        <img src="/images/logo.png" alt="logo" />
    </Link>
);
}

export default Logo;
