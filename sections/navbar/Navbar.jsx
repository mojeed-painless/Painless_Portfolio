import logo from '../../src/assets/pcalogo.png';
import { IoIosColorPalette } from "react-icons/io";
import './navbar.css';
import { useState, useEffect } from 'react'
import { navLinks } from '../../src/data';

export default function Navbar() {

    const [isActive, setIsActive] = useState(1);

    useEffect(() => {
        // Select both header and sections
        const header = document.querySelector('header[id]');
        const sections = document.querySelectorAll('section[id]');
        const allElements = [header, ...sections];

        const handleScroll = () => {
            const scrollY = window.scrollY;

            allElements.forEach(element => {
                if (!element) return; // Skip if element is null
                
                const elementHeight = element.offsetHeight;
                const elementTop = element.offsetTop - 100;
                const elementId = element.getAttribute('id');
                
                if (scrollY > elementTop && scrollY <= elementTop + elementHeight) {
                    const navItem = data.find(item => item.link === `#${elementId}`);
                    if (navItem) {
                        setIsActive(navItem.id);
                    }
                }
            });
        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleSelect(id) {
        setIsActive(id);
    }

    return (
        <nav>
            <div className="container nav__container">
                <a href="index.html" className='nav__logo'>
                    <img src={logo} alt="Logo" />
                </a>
                <ul className='nav__menu'>
                    {navLinks.map(({id, link, title}) => {
                        return (
                            <li key={id}>
                                <a 
                                    href={link} 
                                    className={(isActive === id) ? 'active__link' : undefined} 
                                    onClick={ () => handleSelect(id) }
                                >
                                    {title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}