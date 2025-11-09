import './services.css';
import Card from '../../components/Card.jsx';

import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa";

const data = [
  {id: 1, icon: <FaReact />,  title: 'Frontend Development', description: 'Your product will look good and will be accessible on all devices, including mobile phones, tablets and desktops.'},
  {id: 2, icon: <FaDatabase />,  title: 'Backend Development', description: 'The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.'},
  {id: 3, icon: <MdOutlineDesktopWindows />,  title: 'Web Application', description: 'Unlike other developers in the market, I will be building an app that runs on both IOS and Android devices without any extra cost to you.'},
  {id: 4, icon: <FaAppStoreIos />,  title: 'UI/UX Design', description: 'My designs are modern and intuitive. I use industry standard rules to make sure your users have fun using your product.'},
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