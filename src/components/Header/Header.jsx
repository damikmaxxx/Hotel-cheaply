import React from 'react'
import HeaderBottom from './HeaderBottom/HeaderBottom';
import HeaderTop from './HeaderTop/HeaderTop';
import cl from './Header.module.css'
const Header = ({searchHotels, changeHotelPage}) => {
  return (
    <header className={cl.header}>
        <HeaderTop />
        <HeaderBottom searchHotels={searchHotels} changeHotelPage={changeHotelPage}/>
    </header>
  );
}

export default Header;
