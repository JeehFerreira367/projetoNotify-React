import React from "react";
import './header.scss';
import android from '../img/icone-android.png'
import appes from '../img/icone-ios.png'
import windows from '../img/icone-windows.png'
import mao from '../img/hand.png'

const Header = () => {

    return(
        <div className="Header">
            <header>
                <div className="texto">
                    <h1>Notify <span>.</span></h1> 
                    <p>A great new free psd theme to showcase</p>
                    <p>your new application.</p>
                    <div className="icone">
                    <span><img src={android} alt="Android"/></span>
                    <span><img src={appes} alt="iios"/></span>
                    <span><img src={windows} alt="windows"/></span>
                    </div>
                </div>
                <div className="mao">
                    <img src={mao} alt="mao"/>
                </div>
            </header>
            
        </div>

    )
    }



export default Header;