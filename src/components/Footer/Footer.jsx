import React from 'react';
import Logo from '../UI/Logo/Logo';
import cl from './Footer.module.css';

function Footer() {
  return (
    <footer className={cl.footer}>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3  col-md-2 col-sm-12">
                    <Logo />  
                </div>
                <div className="col-xl-5 col-lg-5  col-md-6 col-sm-12">
                    <nav className={cl.headerNav}>
                        <ul>
                            <li><a href="#">аренда машины</a></li>
                            <li><a href="#">путеводитель</a></li>
                            <li><a href="tel:+79274031580">+7 927 403 15 80</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-xl-4 col-lg-4  col-md-4 col-sm-12">
                    <div className={cl.registerLogin}>
                        <a href="#" className={cl.registerLoginBlock}>регистрация</a>
                        <a href="#" className={cl.registerLoginBlock}>вход</a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="container ">
                <div className={cl.copyright}>
                    © Гумеров Д.М. 2022
                </div>
        </div>
    </footer>
  );
}

export default Footer;
