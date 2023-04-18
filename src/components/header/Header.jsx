import React, { useState } from 'react';
import logo from '../../assets/img/torrelogo.png'
import { useNavigate } from 'react-router-dom';
import './Header.styles.css';

const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <div className="wrapper_left_header">
                    <div>
                        <img className='logo' src={logo} alt="logo" />
                    </div>
                </div>
                <div className="wrapper_right_header">
                    <div>
                        <button onClick={() => navigate("/", { replace: true })}>
                            <p>LOG OUT</p>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;