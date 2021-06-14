import React, { useState, useEffect, useContext } from 'react';
import './Header.scss';
import { Context } from './Context';

export default function Header(props) {
    const { setShowCity } = useContext(Context);

    const searchCity = (e) => {
        if (e.keyCode === 13) {
            setShowCity(e.target.value)
        }
    };

    return (
        <header>
            <div id='logo'>Weather APP</div>
            <input onKeyDown={searchCity} placeholder='City name...'></input>
            <button
                id='option'
                onClick={props.togglePanel}
            ><img src='./img/menu.png' alt=''></img></button>
        </header>
    );
}