import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <ul className="contact">
        <li>
          <a href="mailto:dana.golebiewski@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/danagolebiewski" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/danagolebiewski/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="tel:716-445-9943" target="_blank">
            Phone number
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
