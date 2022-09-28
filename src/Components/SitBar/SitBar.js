import React from 'react';
import s from './SitBar.module.css'
import {Link} from 'react-router-dom'
import Castomlink from "../CustomLink";

function SitBar(props) {

    return (
        <nav className={s.nav} >
            <ul>
                <li><Castomlink to="/" className={s.item}>Profile</Castomlink></li>
                <li><Castomlink to="/dialogs" className={` ${s.item}`}>Messages</Castomlink></li>
                <li><Castomlink to="#" className={s.item}>News</Castomlink></li>
                <li><Castomlink to="#" className={s.item}>MUSIC</Castomlink></li>
                <li><Castomlink to="#" className={s.item}>MUSIC</Castomlink></li>
                <li><Castomlink to="#" className={s.item}>MUSIC</Castomlink></li>
            </ul>
        </nav>
    );
}

export default SitBar;