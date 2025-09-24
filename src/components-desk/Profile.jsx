import profilePic from '../assets/profile-pic.jpg';

export default function Profile() {
  return (
    <aside className="profile">
      <img
        className="profile-pic"
        src={profilePic}
        alt="Katherine Sick profile picture"
      />
      <h1 className="profile-name">Katherine Sick</h1>
      <div className="profile-actions">
        <a
          className="btn btn-linkedin"
          href="https://www.linkedin.com/in/katherine-sick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7 8h4.8v2.2h.1C12.9 8.8 14.6 8 17 8c4 0 5 2.6 5 6v10h-5v-9c0-2.2-.8-3.7-2.8-3.7-1.5 0-2.4 1-2.8 2v11.7h-5V8z"/>
          </svg>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          className="btn btn-github"
          href="https://github.com/KatherineSick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.17 9.05 7.58 10.52.55.1.75-.24.75-.53v-1.87c-3.08.67-3.73-1.48-3.73-1.48-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.72.38-1.2.69-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.12-2.98-.11-.28-.49-1.4.11-2.92 0 0 .91-.29 2.98 1.14a10.3 10.3 0 012.72-.37c.92 0 1.85.13 2.72.37 2.07-1.43 2.98-1.14 2.98-1.14.6 1.52.22 2.64.11 2.92.7.78 1.12 1.77 1.12 2.98 0 4.26-2.6 5.2-5.07 5.48.39.34.74 1 .74 2.02v3c0 .29.2.64.76.53C19.08 20.8 22.25 16.65 22.25 11.76 22.25 5.48 17.27.5 12 .5z"/>
          </svg>
          <span className="sr-only">GitHub</span>
        </a>
        <a className="btn btn-email" href="mailto:katysick11@gmail.com" aria-label="Email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
            <path fill="#fff" d="M12 13.065L.75 5.25V18c0 1.1.9 2 2 2h18.5c1.1 0 2-.9 2-2V5.25L12 13.065zM12 11L23.25 3H.75L12 11z"/>
          </svg>
          <span className="sr-only">Email</span>
        </a>
      </div>
    </aside>
  );
}
