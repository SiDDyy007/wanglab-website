import React from 'react';
import wanglab_photo from '../images/wanglab-photo.jpeg';


const Opportunties = () => {
  return (
    <div>


      <div className="main-content">

        <div className='lab-content'>
          <div className="lab">
            <img src={wanglab_photo} alt="Lab Image" className="lab-image" />
          </div>

          <div className="content">
            <p>
              OPPORTUNITIES BOIIIII
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunties;
