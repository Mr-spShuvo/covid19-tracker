import React from 'react';

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <span>Covid-19</span>
        <span role="img" aria-label="cocktail">
          ☠️
        </span>
        Tracker
      </h1>
      <p className="logo__subtitle">Get Latest Corona Epidemic Updates</p>
    </header>
  );
}
