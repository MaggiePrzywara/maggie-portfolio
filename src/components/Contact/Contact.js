import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>mgprzy@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:mgprzy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
