import headerImage from '../../src/assets/hoody-headshot.png';
import './header.css';

import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";


const data = [
    {id: 1, link: 'https://instagam.com', icon: <AiOutlineInstagram />},
    {id: 2, link: 'https://twitter.com', icon: <BsTwitterX />},
    {id: 4, link: 'https://github.com', icon: <AiOutlineGithub />},
    {id: 3, link: 'https://dribbble.com', icon: <AiOutlineWhatsApp />},
    
]

export default function Header() {
    return (
        <header id='home'>
            <div className="container header__container">
                <div className="header__profile">
                    <img src={headerImage} alt="Header Profile" />
                </div>
                <h3>Mojeed Shittu</h3>
                <p>You are a click away from building your dream website or web app. Send me the details of your project fo a modern, mobile responsive, highly performant website today!</p>
                <div className="header__cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Wok</a>
                </div>
                <div className="header__socials">
                    {data.map(({id, link, icon}) => (
                        <a key={id} href={link} target="_blank" rel="noreferrer noopener">{icon}</a>
                    ))}
                </div>
            </div>
        </header>
    )
}
