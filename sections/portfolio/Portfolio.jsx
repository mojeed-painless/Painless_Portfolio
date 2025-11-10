import './portfolio.css';
import CategoryBtn from '../../components/CategoryBtn.jsx';
import data from './portfolio-data.js';

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="container portfolio__container">
                <h3>Recent Projects</h3>
                <p>Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.</p>
                <div className="portfolio__buttons">
                    <CategoryBtn>All</CategoryBtn>
                    <CategoryBtn>Backend</CategoryBtn>
                    <CategoryBtn>Frontend</CategoryBtn>
                    <CategoryBtn>UI/UX Design</CategoryBtn>
                </div>
                <div className="portfolio__items">
                    {data.map(({id, category, title, image, description, demoLink, codeLink}) => (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h5>{title} ({category})</h5>
                            <small>{description}</small>
                            <div className="portfolio__item-cta">
                                <a href={demoLink} className="portfolio__item-btn" target="_blank" rel="noreferrer">Demo</a>
                                <a href={codeLink} className="portfolio__item-btn" target="_blank" rel="noreferrer">Github</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            
        </section>
    );
}