import React from 'react';
import s from './Header.module.css'
import imgLogo from './img/images.png'
function Header(props) {
    return (
        <header className={s.headerGrid}>
         <div className={s.logoSite}>
             <a href="/"> <img src={imgLogo} alt="" /></a>
         </div>
        </header>
    );
}

export default Header;