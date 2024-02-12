// TableOfContents.jsx

import React from 'react';

const Contents = ({ headings }) => {

    const handleClick = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      };


  return (
    <div className="sidebar">
      <h3>Table of Contents</h3>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contents;
