import aboutImage from '../../src/assets/head-shot2.png';
import myResume from '../../src/assets/MY_RESUME_(SHITTU MOJEED).pdf'
import './about.css';
import Card from '../../components/Card.jsx';

import { HiDownload } from "react-icons/hi";
import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";

const data = [
  {id: 1, icon: <FaAward/>,  title: 'Experience', description: '5+ Years Working'},
  {id: 2, icon: <TbBooks/>,  title: 'Projects', description: '10+ Completed'},
  {id: 3, icon: <BiHappyHeartEyes/>,  title: 'Clients', description: '6+ happy clients'},
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
          <h3>About Me</h3>
          <div className="about__cards">
            {data.map(({id, icon, title, description}) => (
              <Card key={id} className="about__card">
                <span className="about__card-icon">{icon}</span>
                <h5>{title}</h5>
                <small>{description}</small>
              </Card>
            ))}
          </div>
          <p>Building websites that clients love is at the heart of what I do. With over 5 years of experience in web development and more than 10 successful projects delivered, I’m driven by results, quality, and client satisfaction.</p>
          <p>Hello, my name is Mojeed Shittu, a Frontent developer based in Lagos, Nigeria. I specialize in creating modern, industry-standard websites and web applications that help businesses grow online. Get in touch today with your project details and let’s get started. You can view my resume below.</p>
          <a href={myResume} download className='btn primary'>Download CV <HiDownload /> </a>
        </div>
      </div>
    </section>
  );
}