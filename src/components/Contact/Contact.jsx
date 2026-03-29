import React from "react";
import Connection from "../../assets/images/connections.svg";
import Gmail from "../../assets/images/socials/Gmail.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, feel free to reach out via email or connect with
            me on social media below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="mailto:manojbachhav281@email.com">
              <img src={Gmail}alt="Gmail" />
              Mail
            </a>
            <a href="https://www.linkedin.com/in/manoj-bachhav-28a213273" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
              LinkendIn
            </a>
            <a href="https://www.instagram.com/manoz_bachhav?igsh=MXNycnhoMHJ2cnFj" target="_blank" rel="noreferrer">
              <img src={Instagram} alt="Instagram" />
              Instagram
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Connections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;