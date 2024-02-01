// Navigation.js

import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/opportunities">Opportunities</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/tools">Lab Tools</a></li>
            <li><a href="/computing">Lab Computing</a></li>
            <li><a href="/teaching">Teaching</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/resources">Community Resources</a></li>
            <li><a href="/labresources">Lab Resources</a></li>
            <li><a href="http://internal.wanglab.science/">Lab Internal Documentation</a></li>
            <li><a href="/fellowships">Fellowship Resources</a></li>
            <li><a href="/terminology">Mass Spec Terminology</a></li>
            <li><a href="/codingresources">Misc Coding Resources</a></li>
        </ul>
    </nav>
  );
};

export default Navigation;
