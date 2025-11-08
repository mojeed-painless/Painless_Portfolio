import logo from '../../src/assets/pcalogo.png';
import { IoIosColorPalette } from "react-icons/io";
import './navbar.css';

const data = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
];

export default function Navbar() {
    return (
        <nav>
            <div className="container nav__container">
                <a href="index.html" className='nav__logo'>
                    <img src={logo} alt="Logo" />
                </a>
                <ul className='nav__menu'>
                    {data.map(({id, link, title}) => {
                        return (
                            <li key={id}><a href={link}>{title}</a></li>
                        )
                    })}
                </ul>
                <button id='theme__icon'><IoIosColorPalette /></button>
            </div>
        </nav>
    )
}