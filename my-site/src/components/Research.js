import React from 'react';
// import TitleBar from './TitleBar';
import Navigation from './Navigation.js'; 
import wanglab_photo from '../images/wanglab-photo.jpeg';

const Research = () => {
  return (
    <div>

      <div className="main-content">

        <div className='lab-content'>
          <div className="lab">
            <img src={wanglab_photo} alt="Lab Image" className="lab-image" />
          </div>

          <div className="content">
            <p>
              Research content goes here. This section showcases the research currently
              happening in the Wang Bioinformatics Lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
