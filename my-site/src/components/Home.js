// LabContent.js
import React from 'react';
import wanglab_photo from '../images/wanglab-photo.jpeg';

const LabContent = () => {
  return (
    <div className='lab-content'>
      <div className="lab">
        <img src={wanglab_photo} alt="Lab Image" className="lab-image"/>
      </div>
      <div className="content">
        <p>The Wang bioinformatics lab at UC Riverside explores problems at the intersection of computer science
          , data science, analytical chemistry, chemical biology, and mass spectrometry. 
          Our goal is to organize and create tools to explore the chemical world around us. 
          We are a computational lab but operate in a highly collaborative way with a world-wide network of wet-lab scientists. 
          These collaborations drive the computational challenges that we tackle to ensure we build tools together and for the community.
        <br/>
        <br/>
          We are recruiting undergraduates, masters, and PhD students! <a href="/opportunities">Join Us!</a></p>
      </div>
    </div>
  );
}

export default LabContent;
