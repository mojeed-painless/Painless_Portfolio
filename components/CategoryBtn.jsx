import './category-btn.css';

export default function CategoryBtn({onClick, children}) {
    return (
        <button className="portfolio__btn" onClick={onClick}>
            {children}
        </button>
    );
}