import aboutImage from '../../src/assets/main.jpg';
import './about.css';
import Card from '../../components/Card.jsx';

import { HiDownload } from "react-icons/hi";
import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";

const data = [
  {id: 1, icon: <FaAward/>,  title: 'Experience', description: '3+ Years Working'},
  {id: 2, icon: <TbBooks/>,  title: 'Projects', description: '100+ Completed'},
  {id: 3, icon: <BiHappyHeartEyes/>,  title: 'Clients', description: '70+ happy clients'},
]

export default function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImage} alt="About Image" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map(({id, icon, title, description}) => (
              <Card key={id} className="about__card">
                <span className="about__card-icon">{icon}</span>
                <h5>{title}</h5>
                <small>{description}</small>
              </Card>
            ))}
          </div>
          <p>Building my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!</p>
          <p>Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!</p>
          <a href="" download className='btn primary'>Download CV <HiDownload /> </a>
        </div>
      </div>
    </section>
  );
}