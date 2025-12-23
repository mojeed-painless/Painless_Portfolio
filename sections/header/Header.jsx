
import headerImage from '../../src/assets/head-shot1.png';
import './header.css';
import { socials } from '../../src/data';






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
                    {socials.map(({id, link, Icon}) => (
                        <a key={id} href={link} target="_blank" rel="noreferrer noopener"><Icon /></a>
                    ))}
                </div>
            </div>
        </header>
    )
}
