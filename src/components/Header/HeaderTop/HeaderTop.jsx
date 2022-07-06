import React from 'react';
import Logo from '../../UI/Logo/Logo';
import cl from './HeaderTop.module.css';

const HeaderTop = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-2  col-md-2 col-sm-12">
                <Logo />  
            </div>
            <div className="col-xl-5 col-lg-6  col-md-6 col-sm-12">
                <nav className={cl.headerNav}>
                    <ul>
                        <li><a href="https://carrent-kzn.ru/" target="_blank">Аренда машины</a></li>
                        <li><a href="#">Путеводитель</a></li>
                        <li><a href="tel:+79274031580">+7 927 403 15 80</a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-xl-4 col-lg-4  col-md-4 col-sm-12">
                <div className={cl.registerLogin}>
                    <a href="#" className={cl.registerLoginBlock}>Регистрация</a>
                    <a href="#" className={cl.registerLoginBlock}>Вход</a>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default HeaderTop;
