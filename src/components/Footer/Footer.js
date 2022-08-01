import React from 'react'
import {Link} from 'react-router-dom'

import './Footer.css'


const Footer = () => (

    <footer className="app-footer">
    <nav className='app-menu'>
        <div className='text-footer'><h1>Habitat Naturale</h1>
    <p>O grupo Habitat Naturale desde 2013 é o representante oficial da Valcucine no Brasil,  conta com sua matriz localizada na Alameda Gabriel Monteiro da Silva, o showroom é a principal referência da marca no país. O espaço paulistano possui a melhor estrutura para apresentar as coleções, inovações e lançamentos da marca na América Latina.
Valcucine Brasil presente da cidade de São Paulo, junto com as demais principais capitais do mundo, transformando mobiliário em peças de arte.</p></div>
        
        <ul className='app-footer__list'>
        
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/">
                    Home
                </Link>
            </li>
            <li className='app-menu_item'>
            <Link className='app-menu_link' to="/Marcas">
                    Marcas
                    </Link>
            </li>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/Colecoes">
                    Coleções
                </Link>

            </li>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/Projetos">
                    Projetos
                </Link>

            </li>
            <li className='app-menu_item'>
                <Link className='app-menu_link' to="/Parceiros">
                    Parceiros
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
    </footer>

)

export default Footer