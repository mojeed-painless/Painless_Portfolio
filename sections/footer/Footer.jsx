import logo from '../../src/assets/pcalogo.png';
import './footer.css';
import { socials, navLinks } from '../../src/data';

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="container footer__container">
                <div className="footer__logo">
                    <img src={logo} alt="painless logo" />
                </div>

                <ul className='footer__menu'>
                    {navLinks.map(({id, link, title}) => {
                        return (
                            <li key={id}>
                                <a 
                                    href={link} 
                                    className= 'active__link'
                                >
                                    {title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="footer__socials">
                    {socials.map(({id, link, Icon}) => (
                        <a key={id} href={link} target="_blank" rel="noreferrer noopener"><Icon /></a>
                    ))}
                </div>

                <p>&copy; {new Date().getFullYear()} painless code academy.</p>
                    
            </div>
        </footer>
    )
}