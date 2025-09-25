import React from 'react';
import ling1 from '../assets/LING_413_Project_1.pdf';
import ling2 from '../assets/LING_413_Project_2.pdf';
import ling3 from '../assets/LING_413_Project_3.pdf';
import fling from '../assets/LING_413_Final_Project.pdf';
import usePageView from '../hooks/trackPage';


const projectsData = [
  {
    title: 'Personal Website',
    tags: ['React', 'JavaScript', 'CSS'],
    date: '09/2025 - Present',
    description: 'Created a personal portfolio website to showcase projects and previous work (This website!). To build this app I used a React framework and CSS/JavaScript to code and implement the design.',
    repoUrl: 'https://github.com/KatherineSick/katherinesick-portfolio.git'
  },
  {
    title: 'Classify',
    tags: ['React', 'SQL', 'Python', 'JavaScript'],
    date: '07/2024 - 12/2024',
    description: 'A Next.js application to replace the legacy course catalog, storing over 100,000 courses in an SQL database and creating a robust API for seamless data access. I was a part of a 4 developer team that developed this application using SQL, JavaScript, Python, etc.',
    repoUrl: 'https://github.com/KatherineSick/classify.git'
  },
  {
    title: 'Natural Disaster Risk Calculator',
    tags: ['React', 'JavaScript', 'APIs'],
    date: '02/2023',
    description: 'Built a program that, given a home address or location information, will show you the statistics for the top disasters/risks that could happen at that location, and give an overall risk assessment score. This project was made for the HackIllinois 2023 hackathon, and was made in collaboration with 2 other team members.',
    repoUrl: 'https://github.com/KatherineSick/HackIllinois2023.git'
  },
  {
    title: 'Twitch Graph Analysis',
    tags: ['C++'],
    date: '10/2022 - 12/2022',
    description: 'Programmed a C++ application to analyze Twitch networks using Dijkstra’s algorithm. This project was made in a team of three other people in the Fall of 2022.',
    repoUrl: 'https://github.com/lnguy7/cs225FinalProject.git'
  }
];

const papersData = [
  {
    title: 'Embedding Analysis of Gendered Language using BERT',
    date: '05/2025',
    description: 'This study investigates the presence and impact of gendered language in job advertisements using contextual word embeddings derived from BERT. We quantify the gender bias in job descriptions by comparing extracted keywords to prototypical male and female embedding centroids.',
    pdfUrl: fling
  },
  {
    title: 'Comparing Word Embeddings of Spam and Non-Spam Emails',
    date: '04/2025',
    description: 'This paper follows the development of a semi-supervised experiment that uses Word2Vec models on different classes of a spam and non-spam email corpus. This allows us to compare word embeddings across different registers, and analyze the neighborhoods of certain words in each.',
    pdfUrl: ling3
  },
  {
    title: 'Analyzing Topics of Tweets and their Significance Over Time',
    date: '03/2025',
    description: 'This paper follows the development of an unsupervised model that applies Latent Dirichlet Allocation (LDA) to cluster and analyze topics from a sample of the Sentiment140 Twitter corpus.',
    pdfUrl: ling2
  },
  {
    title: 'Training Models for Part-of-Speech Tagging',
    date: '03/2025',
    description: 'This study follows the development of part-of-speech tagging classifiers. For this study we train a bi-directional LSTM model and a Naive Bayes model in order to correctly identify the part of speech of each word in a sentence.',
    pdfUrl: ling1
  }
];

export default function ProjectsMobile() {
  usePageView("/desktop");
  return (
    <div className="projects-mobile">
      <h2 className="mobile-heading">Project Highlights</h2>
      <ul className="projects-ul">
        {projectsData.map((project, idx) => (
          <li className="project-item" key={idx}>
            <div className="project-meta">
              <strong className="project-title">{project.title}</strong>
              <time className="project-date">{project.date}</time>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="tag-list">
              {project.tags.map((t, i) => (
                <span className="tag-badge" key={i}>{t}</span>
              ))}
            </div>
            <div className="entry-actions">
              {project.repoUrl && (
                <a
                  className="btn btn-entry btn-repo"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} repository`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path fill="#fff" d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.05 7.58 10.52.55.1.75-.24.75-.53v-1.87c-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.69-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.12-2.98-.11-.28-.49-1.4.11-2.92 0 0 .91-.29 2.98 1.14a10.3 10.3 0 012.72-.37c.92 0 1.85.13 2.72.37 2.07-1.43 2.98-1.14 2.98-1.14.6 1.52.22 2.64.11 2.92.7.78 1.12 1.77 1.12 2.98 0 4.26-2.6 5.2-5.07 5.48.39.34.74 1 .74 2.02v3c0 .29.2.64.76.53C19.08 20.8 22.25 16.65 22.25 11.76 22.25 5.48 17.27.5 12 .5z"/>
                  </svg>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mobile-heading">Research Papers</h2>
      <ul className="projects-ul">
        {papersData.map((paper, idx) => (
          <li className="project-item" key={idx}>
            <div className="project-meta">
              <strong className="project-title">{paper.title}</strong>
              <time className="project-date">{paper.date}</time>
            </div>
            <p className="project-desc">{paper.description}</p>
            <div className="entry-actions">
              <a
                className="btn btn-entry btn-pdf"
                href={paper.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${paper.title} PDF`}
              >
                PDF
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
