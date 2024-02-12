import React from 'react';



const LabComputing = () => {
  return (
    <div>


      <div className="lab-content">

      <h1>Lab Computing</h1>

<h2>Computing Equipment</h2>

<p>
  The Wang Bionformatics lab aims to gain insight on large datasets and develop 
  computational tools that impact the community. To accomplish this mission, 
  we have computational resources and storage resources for use within 
  the lab and also to serve the community.

  Our lab also has a strong emphasis on sustainability. We try to source 
  used computing hardware that is still modern and reliable. If you'd like 
  to donate any hardware, please reach out!
</p>

<h3>Computational Servers</h3>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>CPU</th>
      <th>RAM</th>
      <th>Storage</th>
    </tr>  
  </thead>
  <tbody>
    <tr>
      <td>VM Server 1</td>
      <td>32 Cores</td> 
      <td>768 GB RAM</td>
      <td>4x 4 TB SSD</td>
    </tr>
    <tr>
      <td>VM Server 2</td>
      <td>32 Cores</td>
      <td>768 GB RAM</td> 
      <td>2x 2 TB SSD</td>  
    </tr>
  </tbody>
</table>

{/* Other tables */}

<h3>Computational Systems</h3>

<p>
  Interally we utilize SLURM to create a virtual batch queuing system to utilize 
  idle computing resources within our cluster.
</p>

      </div>
    </div>
  );
};

export default LabComputing;
