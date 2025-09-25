import React from 'react';
import grad from '../assets/grad.jpg';
import lol from '../assets/lol.png';
import cook from '../assets/cook.png';
import fuku from '../assets/fuku.png';
import nick from '../assets/nick.png';
import shozo from '../assets/shozo.png';
import FloatingCarousel from './FloatingCarousel';
import usePageView from '../hooks/trackPage';

const About = () => {
  usePageView("/about-desktop");
  const carousel1 = [
    { src: grad, alt: 'graduation pic', caption: 'Graduation picture near (one of) my college(s) sign!' },
    { src: lol, alt: 'me at a league of linguistics event', caption: 'League of Linguists (my RSO) Valentine\'s day event' },
  ];
  const carousel2 = [
    { src: shozo, alt: 'shozo calligraphy', caption: 'Learning about calligraphy and textiles from Japan House\'s founder, Shozo Sato.' },
    { src: cook, alt: 'cooking at japan house', caption: 'Preparing food for a Japan House event with Japan House staff and interns' },
    { src: nick, alt: 'me with nick offerman', caption: 'Working with Nick Offerman at a Japan House fundraising event!' },
    { src: fuku, alt: 'fukushima artists', caption: 'Posing with visiting Fukushima ambassadors/artists ' },
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
        a teaching assistant for undergraduate computer science courses. I'm a fast learner, and once I get hooked on something
        I tend to dive in headfirst and learn as much as I can about it.
      </p>
      <FloatingCarousel images={carousel2} float="left" maxWidth={250} interval={8000} />
      <p>
        Outside of tech, I am very interested in language learning and, more specifically, Japanese language
        and culture. I have studied Japanese for about 8 years and during my undergraduate studies I had the wonderful opportunity to work with 
        Japan House here at UIUC. I loved working at Japan House, and I was able to experience and learn so many things 
        I know I couldn't have elsewhere. 
      </p>
      <p>
        During my Junior year of undergrad, I was also able to study abroad in Tokyo, Japan for half a year
        at Keio University. This experience allowed me to learn so much about other cultures and perspectives, not just Japanese culture.
        I believe having these experiences really gave me a chance to come at problems with different ideas,
        and ways to collaborate with others. 
      </p>
    </div>
  );
};

export default About;
