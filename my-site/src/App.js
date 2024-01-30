import React from 'react';
import './App.css'; 
import wanglab_photo from './images/wanglab-photo.jpeg';
import TitleBar from './TitleBar';

function App() {
  return (
    <div className="App">
      <TitleBar labName='Wang Bioinformatics Lab @ UCR' />        
      <div className="main-content">
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

        <div className='lab-content'>
          <div className="lab">
              <img src={wanglab_photo} alt="Lab Image" class="lab-image"/>
          </div>
        
          <div className="content">
              <p>The Wang bioinformatics lab at UC Riverside explores problems at the intersection of computer science
                , data science, analytical chemistry, chemical biology, and mass spectrometry. 
                Our goal is organize and create tools to explore the chemical world around us. 
                We are a computational lab but operate in a highly collaborate way with a world-wide network of wet-lab scientists. 
                These collaborations drive the computational challenges that we tackle to ensure we build tools together and for the community.
              <br/>
              <br/>
                We are recruiting undergraduates, masters, and PhD students! <a href="/opportunities">Join Us!</a></p>
          </div>
        </div>
      </div>

      <div className="ucr-logo">
        <img src="ucr-logo.svg" alt="UCR Logo" className="ucr-image"/>
      </div>
    </div>
  );
}

export default App;
