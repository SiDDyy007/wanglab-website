import React from 'react';


const Teaching = () => {
  return (
    <div>


      <div className="main-content">

        <div className='lab-content'>

            <h2>Teaching at UCR</h2>

          <div className="content">
            <p>
              Teaching Page
            </p>

            <table>
                <thead>
                    <tr style={{backgroundColor: '#ddd', fontWeight: 'bold'}}> 
                    <th>Term</th>
                    <th>Code</th>
                    <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Fall 2022</td>  
                    <td>CSE 260</td>
                    <td>Special Topics in Computer Science - Revealing the Chemical World Around Us - Computational Mass Spectrometry</td>
                    </tr>
                    <tr>
                    <td>Row 3 Col 1</td>
                    <td>Row 3 Col 2</td>
                    <td>Row 3 Col 3</td>
                    </tr>
                    <tr>
                    <td>Row 4 Col 1</td>    
                    <td>Row 4 Col 2</td>
                    <td>Row 4 Col 3</td>
                    </tr>
                    <tr>
                    <td>Row 5 Col 1</td>  
                    <td>Row 5 Col 2</td> 
                    <td>Row 5 Col 3</td>
                    </tr>
                </tbody>
                </table>
            
            <h2>TA and Grader Positions</h2>
            <p>If you would like to be a grader or TA for any course that I am teaching, please reach out to me. 
                However, be aware that in general, TA positions will include PhD students in my research lab and graders will come recommended. 
                However, in the circumstances where we are looking for more graders or TAs, 
                you can reach out to me, but be aware you must meet the following criteria:</p>
            <ol>
                <li>Enrolled at UC Riverside - Required</li>
                <li>Have taken the course before or equivalent with a good grade - Required</li>
                <li>Been a TA or Grader for this course previously with references - Highly Recommended</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
