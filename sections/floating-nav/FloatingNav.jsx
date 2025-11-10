import './floating-nav.css';
import { TiHome } from "react-icons/ti";
import { RiContactsFill } from "react-icons/ri";
import { MdHomeRepairService } from "react-icons/md";
import { PiGridFourFill } from "react-icons/pi";
import { FaCommentDots } from "react-icons/fa";

import { useState, useEffect, useRef } from 'react';

const data = [
    {id: 1, link: '#home', title: <TiHome />},
    {id: 2, link: '#about', title: <RiContactsFill />},
    {id: 3, link: '#services', title: <MdHomeRepairService />},
    {id: 4, link: '#portfolio', title: <PiGridFourFill />},
    {id: 5, link: '#contact', title: <FaCommentDots />
}
];

export default function FloatingNav() {

    const [isActive, setIsActive] = useState(1);

    // visibility state & timer ref
    const [visible, setVisible] = useState(true);
    const hideTimer = useRef(null);

    useEffect(() => {
            // Select both header and sections
            const header = document.querySelector('header[id]');
            const sections = document.querySelectorAll('section[id]');
            const allElements = [header, ...sections];
    
            const handleScrollForActive = () => {
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

            // show immediately when scrolling and hide a few seconds after stop
            const handleScrollForVisibility = () => {
                // show immediately
                setVisible(true);
                // clear existing timer
                if (hideTimer.current) {
                    clearTimeout(hideTimer.current);
                }
                // hide after 1.5s of no scroll (adjust as needed)
                hideTimer.current = setTimeout(() => {
                    setVisible(false);
                    hideTimer.current = null;
                }, 3000);
            };

            const handleScroll = () => {
                handleScrollForActive();
                handleScrollForVisibility();
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            // ensure nav hides if user never scrolls after mount? keep visible by default
            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (hideTimer.current) {
                    clearTimeout(hideTimer.current);
                    hideTimer.current = null;
                }
            };
        }, []);

    function handleSelect(id) {
          setIsActive(id);
          // if user clicks, keep visible briefly
          setVisible(true);
          if (hideTimer.current) { clearTimeout(hideTimer.current); }
          hideTimer.current = setTimeout(() => setVisible(false), 3000);
    }

    

    return (
        <aside id='floating-nav' className={visible ? 'floating' : 'floating floating--hidden'}>
            <ul className='floating__menu'>
                {data.map(({id, link, title}) => {
                    return (
                        <li key={id} className={(isActive === id) ? 'floating-active__link' : undefined} onClick={() => handleSelect(id)}>
                            <a href={link}> {title} </a>
                        </li>
                    )
                })}
            </ul>    
        </aside>
    )
}