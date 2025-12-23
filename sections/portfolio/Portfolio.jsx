import './portfolio.css';
import CategoryBtn from '../../components/CategoryBtn.jsx';
import data from './portfolio-data.js';

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className="container portfolio__container">

                <h3>Recent Projects</h3>

                <p>Explore some of the recent projects I’ve completed for my clients.</p>

                {/* <div className="portfolio__buttons">
                    <CategoryBtn>All</CategoryBtn>
                    <CategoryBtn>Backend</CategoryBtn>
                    <CategoryBtn>Frontend</CategoryBtn>
                    <CategoryBtn>UI/UX Design</CategoryBtn>
                </div> */}

                <div className="portfolio__items">
                    {data.map(({id, title, image, description, demoLink, codeLink}) => (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            
                            <div className="portfolio__item-text">
                               <h5>{title}</h5>
                                <small>{description}</small> 
                            </div>

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