import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <ul className="contact">
        <li>
          <a href="mailto:kaleb.rittenhouse@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/kalebritt" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/k-ritt/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a href="tel:719-232-0702" target="_blank">
            Phone number
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
