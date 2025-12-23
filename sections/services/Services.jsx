import './services.css';
import Card from '../../components/Card.jsx';

import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";

const data = [
  {id: 1, icon: <FaReact />,  title: 'Frontend Development', description: 'Your product will deliver a beautiful, consistent experience on every device, from mobile phones and tablets to desktop screens.'},
  {id: 2, icon: <MdOutlineDesktopWindows />,  title: 'Web Application', description: 'High-performing web applications tailored to your business needs and built for growth.'},
  {id: 3, icon: <FaDatabase />,  title: 'Search Engine Optimization', description: 'SEO strategies designed to help your website rank higher and reach the right audience.'},
  {id: 4, icon: <FaAppStoreIos />,  title: 'Mentorship', description: 'Guided frontend development mentorship designed to accelerate your learning and career.'},
]

export default function Services() {
    return (
        <section id="services">
            <div className="container service__container">
                <h3>My Services</h3>
                <p>I give you the best in all the services below</p>
                <div className="service__cards">
                    {data.map(({id, icon, title, description}) => (
                        <article key={id} className="service__card">
                            <span className="service__card-icon">{icon}</span>
                            <div>
                                <h5>{title}</h5>
                                <small>{description}</small>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            
        </section>
    );
}