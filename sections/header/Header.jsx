<<<<<<< HEAD
import headerImage from '../../src/assets/head-shot1.png';
=======
import headerImage from '../../src/assets/hoody-headshot.png';
>>>>>>> 66601d9f39fce5167fab524e439f7e1e8b7177ae
import './header.css';

import { AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const data = [
    {id: 1, link: 'https://linkedin.com/in/mojeed-shittu', icon: <FaLinkedin />},
    // {id: 2, link: 'https://twitter.com', icon: <BsTwitterX />},
    {id: 4, link: 'https://github.com/mojeed-painless', icon: <AiOutlineGithub />},
    {id: 3, link: 'https://wa.me/2349124323167', icon: <AiOutlineWhatsApp />},
    
]

export default function Header() {
    return (
        <header id='home'>
            <div className="container header__container">
                <div className="header__profile">
                    <img src={headerImage} alt="Header Profile" />
                </div>

                <h3>Mojeed Shittu</h3>

                <h4>( Frontend Developer )</h4>

                <p>One click is all it takes to start building your dream website or web app. Send us your project details today for a modern, mobile-responsive, and high-performance solution.</p>
                
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
