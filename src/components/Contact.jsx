import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section id="contact" className="p-20 bg-secondary text-primary">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="flex flex-col items-center space-y-4">
        <a 
          href="mailto:your.email@example.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-highlight py-3 px-6 rounded-lg hover:bg-accent transition duration-300 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-highlight py-3 px-6 rounded-lg hover:bg-accent transition duration-300 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-highlight py-3 px-6 rounded-lg hover:bg-accent transition duration-300 flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
