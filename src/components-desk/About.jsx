import React from 'react';
import grad from '../assets/grad.jpg';
import lol from '../assets/lol.png';
import FloatingCarousel from './FloatingCarousel';

const About = () => {
  const carousel1 = [
    { src: grad, alt: 'graduation pic', caption: 'Graduation picture near (one of) my college(s) sign!' },
    { src: lol, alt: 'me at a league of linguistics event', caption: 'League of Linguists (my RSO) Valentine\'s day event!' },
  ];
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p>
        Hello! I'm Katy Sick, a passionate software developer and graduate student 
        at the University of Illinois at Urbana-Champaign, pursuing a Master of Computer Science.
      </p>
      <FloatingCarousel images={carousel1} float="right" maxWidth={250} interval={8000} />
      <p>
        While I am currently a computer science student, my undergraduate background is in both computer
        science and linguistics, which gives me a unique perspective on language technologies and human-computer interaction.
        Because of this my interests are more geared towards machine learning, natural language processing, and programming
        that allows me to work with language. 
      </p>
      <p>
        However, I also enjoy web development, software engineering,
        and user-centered design. I've worked on a few research papers, many machine projects, and have experience being
        a teaching assistant for undergraduate computer science courses.
      </p>
      <p>
        Outside of tech, I am very interested in language learning and, more specifically, the Japanese language
        and culture. I have studied Japanese for about 8 years and during my undergraduate studies I had the wonderful opportunity to work with 
        Japan House here at UIUC.
      </p>
    </div>
  );
};

export default About;
