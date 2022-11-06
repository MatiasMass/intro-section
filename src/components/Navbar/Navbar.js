import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import Dropdown from '../Dropdown/Dropdown'
const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)
    const options1 = [
        {
            img: '',
            title: 'Todo List'
        },
        {
            img: '',
            title: 'Calendar'
        },
        {
            img: '',
            title: 'Reminders'
        },
        {
            img: '',
            title: 'Todo Planning'
        }
    ]

    const options2 = [
        {
            img: '',
            title: 'History'
        },
        {
            img: '',
            title: 'Our Team'
        },
        {
            img: '',
            title: 'Blog'
        }
    ]


    return(
        <div className='Navbar'>
            <div className="logo">
                <span className='nav-logo'>snap</span>
            </div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <ul className='left'>
                    <li><Dropdown name = "Features" options = {options1} /></li>
                    <li><Dropdown name = "Company" options = {options2} /></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About</a></li> 
                </ul>
                <ul className='rigth'>
                    <li><a href="#">Login</a></li>
                    <li className='button-register'><a href="/">Register</a></li>
                </ul>                                        
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar;

