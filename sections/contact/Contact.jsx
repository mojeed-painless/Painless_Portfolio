import './contacts.css';
import { contacts } from '../../src/data';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  const [state, handleSubmit] = useForm("xqeznybn");

  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <section id='contact'>
        <div className="container contact__container">
          <h3>Contact Me</h3>

          <div className="contact__body">
            <div className="contact__items">
              {contacts.map(({ id, Icon, title, body, link }) => (
                <div key={id} className="contact__item">
                  <span><Icon /></span>

                  <div>
                    <p>{title}</p>
                    <p>{body}</p>
                  </div>

                  <a href={link} target="_blank" rel="noreferrer">Send a message</a>
                </div>
              ))}
            </div>

            <div className="contact__right">
              <form action="https://formspree.io/f/xqeznybn" method="POST" onSubmit={handleSubmit}>
                <div className="contact__right-input">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required/>
                </div>
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />

                <div className="contact__right-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" required/>
                </div>
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />

                <div className="contact__right-input">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" placeholder="Subject"/>
                </div>
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                />

                <div className="contact__right-input">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows={5} placeholder="Drop you Message" required></textarea>                 
                </div>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" className="btn primary" disabled={state.submitting}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
}