import React, { useState } from 'react';
import logo from '../../assets/img/react.svg'
import { HiMenu } from "react-icons/hi";
import './Header.styles.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <div className="wrapper_left_header">
                    <div>
                        <img src={logo} alt="logo" />
                        <button className='burguer' onClick={() => setIsOpen(!isOpen)}>
                            <HiMenu />
                        </button>
                    </div>
                </div>
                <div className="wrapper_right_header">
                    <div>
                        <button>
                            <p>LOG OUT</p>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;