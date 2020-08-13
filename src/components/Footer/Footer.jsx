import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        Made with React + &nbsp;
        <a href="https://disease.sh/" target="_blank" rel="noreferrer">
          disease.sh
        </a>{' '}
        👌
      </p>
      <p>
        &copy;
        <span role="img" aria-label="hi">
          👋
        </span>
        <a href="https://spshuvo.com">spshuvo.com</a> {new Date().getFullYear}
      </p>
    </footer>
  );
}
