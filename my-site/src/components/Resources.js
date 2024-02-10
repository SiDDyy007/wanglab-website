import React from 'react';



const Resources = () => {
  return (
    <div>
      <div className="lab-content">
        <h2 id="resources">Community Resources</h2>
            <p>
                These are some useful resources for both research and for students.
            </p>
            <div>
            <h3>Mass Spectrometry Resources</h3>            
                <a href="https://massive.ucsd.edu/ProteoSAFe/static/massive.jsp" style={{color: 'blue'}}>
                    MassIVE - Mass Spectrometry Repository 
                </a>
                <br/>
                <a href="https://www.ebi.ac.uk/metabolights/" style={{color: 'blue'}}> 
                    Metabolights - Mass Spectrometry Repository
                </a>
                <br/>
                <a href="https://gnps-structure.ucsd.edu/dashinterface/" style={{color: 'blue'}}> 
                    Mass Spectrometry Calculator
                </a>
            </div>

            <div>
            <h3>Research Resources</h3>            
                <a href="https://pubmed.mingxunwang.com/" style={{color: 'blue'}}>
                    Collaborator Summarizer - For NSF Grants
                </a>
                <br/>
                <a href="https://nature-submission.herokuapp.com/" style={{color: 'blue'}}> 
                    Nature Journals Author Entry Automator
                </a>
                <br/>
            </div>
            
    </div>       
    </div>
  );
};

export default Resources;
