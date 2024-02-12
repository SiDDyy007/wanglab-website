import React from 'react';



const Terminology = () => {
  return (
    <div>
      <div className="lab-content">
      <h1>Mass Spec Terminology</h1>

<h2>m/z</h2>
<p>
  This is the observed mass to charge ratio of an ion. To be observable in 
  a mass spectrometer, molecules need to have a charge. The m/z is the 
  mass of the molecule divided by the charge. In a lot of cases the charge 
  is 1, so the mass and m/z are the same, but this is not always the case.
</p>

<h2>Precursor m/z</h2>
<p>
  This is the m/z of an intact molecule before it is fragmented. To 
  calculate this, you will need to calculate the monoisotopic mass of the 
  molecule in the neutral form, then figure out which charged particle 
  gives the molecule charge, something like H or Na. Then you will add the 
  mass of this charged particle to mass of the neutral molecule. Then you 
  will divide by the charge to get the precursor m/z of the molecule for 
  that specific ionized form (adduct). This is generally notated as 
  something like M+H or M+Na as examples. To calculate the precursor m/z 
  for different adducts, use the 
  <a href="https://www.thermofisher.com/us/en/home/industrial/mass-spectrometry/mass-spectrometry-learning-center/mass-spectrometry-resource-library/mass-spec-tools/adduct-calculator.html">
    calculator here
  </a>
</p>

<h2>Scan</h2>
<p>
  In mass spectrometry, a "scan" refers to the process of detecting ions 
  across a range of mass-to-charge ratios (m/z). It is measuring the mass 
  spectrum, which is a plot of the ion intensity as a function of the m/z. 
  Each peak in the spectrum corresponds to a particular ion species.
  
  This applies to both MS1 and tandem mass spectra.
</p>

<h2>Monoisotopic mass</h2>
<p>
  The monoisotopic mass is the summed mass of a molecule. However, the 
  mass values for each atom are not the average mass of the atom, but the 
  mass of the most common isotope of that atom. This is because the most 
  common isotope of an atom is the one that is most likely to be observed 
  in nature and in our experiment. For example, the average mass of Carbon 
  (C) is 12.011 Daltons but the mass of the most common isotope C12 is 12 
  Daltons. In mass spectrometry, it is more useful to use as a starting 
  point the monoisotopic mass.
</p>

<h2>
  Mass Spectrometry Levels (e.g MS1 and MS2)
</h2>
<p>
  MS1 refers to the first level of mass spectrometry that surveys all 
  intact molecules. Within one MS1 measurement (called a scan) we can see 
  many ions representing many different compounds at the same time. When 
  couple with liquid chromatography, we are able to see what ions are 
  coming out of the column at that moment in time. Generally, MS1 are 
  acquired repeated over time, something like 1 per second or more 
  frequent to measure how the ions are changing over time.
</p>

<p>
  Tandem mass spectrometry (MS/M2 or MS2) refers to a second measurement 
  using the mass spectrometer of a specific molecule detected in the mass 
  spectrometer. However, here we don't simply view it intact, but instead 
  we isolate it and then break it apart. Then we measure the pieces of the 
  molecule. This process, called fragmentation, is what allows us to get a 
  fingerprint for the molecule. We can then utilize this MS/MS spectrum 
  for identifcation purposes or other downstream analysis.
</p>

<h2>Extracted Ion Chromatograph (XIC/EIC)</h2>
<p>
  The extraction ion chromatogram is looking at the same ion (typically 
  in the MS1 spectrum) over time. This is a plot of the intensity of the 
  ion over time.
</p>

<p>
  You can see this as something that looks like this: 
</p>

<img 
  src="xic.png"  
  alt="XIC plot example"
/>

<p>
  And here is the  
  <a href="https://github.com/colettequintyn/LCMSViewer">
    link
  </a>  
  to the interactive dashboard for this plot
</p>

<h2>Mass Spectrometry Data Frames</h2>

<p>
  The standard data frame format for the lab is created via MassQL. Using 
  MassQL, there will be two files that are generated:
</p>

<ul>
  <li>
    MS1 Data Feather/Parquet File with a suffix "_ms1.msql.feather"  
  </li>
  <li>
    MS2 Data Feather/Parquet File with a suffix "_ms2.msql.feather"
  </li>
</ul>


      <h2 id="ms1-data-description">MS1 Data Description</h2>
      <p>
        This file includes, as each row, all the MS1 peaks for the entire data file.
      </p>
      <ul>
        <li><strong>i</strong> - This is the intensity of the peak</li>
        <li><strong>i_norm</strong> - This is the relative intensity of an MS1 peak within its spectrum. The largest peak will be 1.0</li>
        <li><strong>i_tic_norm</strong> - This is the relative intensity of an MS1 peak within a spectrum, where the sum of all peaks within the spectrum will be 1.0</li>
        <li><strong>mz</strong> - This is the mass to charge of the peak</li>
        <li><strong>scan</strong> - This is the spectrum identifier that a specific peak belongs to. Multiple peaks (rows in the dataframe) belong to a single scan, and multiple scans (thousands to hundreds of thousands) are in each file</li>
        <li><strong>rt</strong> - This is retention time of the peak</li>
        <li><strong>polarity</strong> - 1 means positive, 2 means negative</li>
      </ul>

      <h2 id="ms2-data-description">MS2 Data Description</h2>
      <p>
        This file includes, as each row, all the MS2 peaks for the entire data file.
      </p>
      <ul>
        <li><strong>i</strong> - This is the intensity of the peak</li>
        <li><strong>i_norm</strong> - This is the relative intensity of an MS1 peak within its spectrum. The largest peak will be 1.0</li>
        <li><strong>i_tic_norm</strong> - This is the relative intensity of an MS1 peak within a spectrum, where the sum of all peaks within the spectrum will be 1.0</li>
        <li><strong>mz</strong> - This is the mass to charge of the peak</li>
        <li><strong>scan</strong> - This is the spectrum identifier that a specific peak belongs to. Multiple peaks (rows in the dataframe) belong to a single scan, and multiple scans (thousands to hundreds of thousands) are in each file</li>
        <li><strong>rt</strong> - This is retention time of the peak</li>
        <li><strong>polarity</strong> - 1 means positive, 2 means negative</li>
        <li><strong>precmz</strong> - This is the m/z of the precursor molecule that led to the fragmentation observed in the MS2</li>
        <li><strong>ms1scan</strong> - This is the scan number of the precursor MS1 spectrum that directly precedes the MS2 spectrum</li>
        <li><strong>charge</strong> - This is the charge of the precursor molecule</li>
      </ul>

        
    </div>       
    </div>
  );
};

export default Terminology;
