import React from 'react';
import wanglab_photo from '../images/wanglab-photo.jpeg';


const LabComputing = () => {
  return (
    <div>


      <div className="main-content">

        <div className='lab-content'>
          <div className="lab">
            <img src={wanglab_photo} alt="Lab Image" className="lab-image" />
          </div>

          <div className="content">
            <p>
              Langa computing boi 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabComputing;
