import { AiOutlineWhatsApp, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

export const navLinks = [
    {id: 1, link: '#home', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Services'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'}
];


export const socials = [
    {id: 1, link: 'https://linkedin.com/in/mojeed-shittu', Icon: FaLinkedin},
    // {id: 2, link: 'https://twitter.com', icon: <BsTwitterX />},
    {id: 4, link: 'https://github.com/mojeed-painless', Icon: AiOutlineGithub},
    {id: 3, link: 'https://wa.me/2349124323167', Icon: AiOutlineWhatsApp},
    
]

export const contacts = [
    { id: 1, Icon: IoMailOpenOutline, title: 'Email', body: 'shittumjd00@gmail.com', link: 'https://shittumjd00@gmail.com', },
    { id: 2, Icon: AiOutlineWhatsApp, title: 'Whatsapp', body: '+2349124323167', link: 'https://wa.me/2349124323167', },
]