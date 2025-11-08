import './card.css';

export default function Card({ children, className, onClick }) {
  return (
    <article className={`card ${className}`} onClick={onClick}>
        {children}
    </article>
  );
}