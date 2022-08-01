import React from 'react'
import {Link} from 'react-router-dom'

import './Menu.css'

const Menu = () =>(
    <nav className='app-menu'>
        <ul className='app-menu_list'>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/">
                    Home
                </Link>

            </li>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/Quemsomos">
                    Quem Somos
                </Link>

            </li>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/Contato">
                    Contato
                </Link>

            </li>

        </ul>





    </nav>


)

export default Menu
