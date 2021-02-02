import React from 'react';
import './Header.scss';
// @ts-ignoren
import { Link } from "react-router-dom";
import leftLogo from './imdb-logo.png';
import rightLogo from './shopping_cart.png';
import user from './user.webp';

const Header = () => {
    return (
        <div className={'header'}>
            <div className="header__content">
                <Link to={'/'}><img src={leftLogo} alt="" className="header__left-logo" /></Link>
                <Link to={'/Admin'}><img src={user} alt="" className="header__user-logo" /></Link>
                <p className="header__user-text" >You are logged as: Admin</p>
                <h1 className="header__title">Movie Shop</h1>
                <Link to={'/Cart'}><img src={rightLogo} alt="" className="header__right-logo" /></Link>
            </div>
        </div>
    );
};

export default Header;