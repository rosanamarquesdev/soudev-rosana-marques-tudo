import React from 'react';

import "./style.scss";

import Tenis from './tenis.svg';
// import "./style.css";
import {Container} from "@mui/material";


export default function Banner()
{
    return (
        <>
            <div className='background-banner'>
                <Container>

                    <div className="banner">

                        <div className="left">
                            <p className="best">
                                Melhores ofertas personalizadas
                            </p>
                            <p className="title-banner">
                                Queima de 
                                estoque Nike 🔥
                            </p>
                            <p className="text-banner">
                                Consequat culpa exercitation mollit nisi excepteur do <br/>
                                do tempor laboris eiusmod irure consectetur
                            </p>
                            <button className="offers-btn">
                                Ver Ofertas
                            </button> 
                        </div>

                        <div className="slider">

                            <div className="slides">

                                <input type="radio" name="radio-btn" id="radio1" />
                                <input type="radio" name="radio-btn" id="radio2" />
                                <input type="radio" name="radio-btn" id="radio3" />
                                <input type="radio" name="radio-btn" id="radio4" />

                                <div className="slide first">
                                    <img src={Tenis} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={Tenis} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={Tenis} alt="" />
                                </div>
                                <div className="slide">
                                    <img src={Tenis} alt="" />
                                </div>

                                <div className="navigation-auto">
                                    <div className="auto-btn1"></div>
                                    <div className="auto-btn2"></div>
                                    <div className="auto-btn3"></div>
                                    <div className="auto-btn4"></div>
                                </div>

                            </div>

                            <div className="manual-navigation">
                                <label htmlFor="radio1" className="manual-btn"></label>
                                <label htmlFor="radio2" className="manual-btn"></label>
                                <label htmlFor="radio3" className="manual-btn"></label>
                                <label htmlFor="radio4" className="manual-btn"></label>
                            </div>

                        </div>

                    </div>

                </Container>
            </div> 
        </>
    )
}
