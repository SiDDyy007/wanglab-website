import React from 'react';



const CodingResources = () => {
  return (
    <div>
      <div className="lab-content">
      <div>
      <h1>Coding/Development Resources</h1>

      <p>
        This is a page that contains little tidbits that in our lab we found 
        useful for getting work done. A lot of random small things that we 
        always get hung-up on so we compiled it on one place.
      </p>

      <h2>VM Linux Management</h2>

      <h3>Allocating Additional Disk Space</h3>
      <p>
        Allocate additional space in VM Hypervisor
        <br />
        Follow this tutorial to repartition the VM disk
      </p>

      <h3>Changing Linux Hostname in Ubuntu</h3>
      <p>
        hostnamectl set-hostname new-hostname
      </p>

      <h2>Python</h2>

      <h3>Profiling and creating a visualzaiton</h3>
      <p>
        <a href="https://github.com/jrfonseca/gprof2dot">
          Link
        </a>.
        <br />
        Worked well for me. Specifically cProfile + gprof2dot + graphViz.
        <br />
        <code>
          python -m cProfile -o myLog.profile ./test.py
          <br />
          gprof2dot -f pstats myLog.profile -o callingGraph.dot
          <br />
          dot -Tsvg callingGraph.dot -o callingGraph.svg
        </code>
      </p>

      <h3>Creating chunks of big list</h3>
      <code>
        {`
        # Yield successive n-sized 
        # chunks from l. 
        def divide_chunks(l, n): 
            # looping till length l  
            for i in range(0, len(l), n):  
                yield l[i:i + n]
        `}
      </code>

      <h3>Building your Python package with</h3>
      <p>
        Check the new pyproject.toml file example data/pyproject_template.toml to configure the building process with poetry.
        <br />
        <code>python3 -m build</code>
      </p>

      <h3>Uploading a package to Pypi</h3>
      <p>
        It is recommended to test everything in TestPypiy first
      </p>

      <ol>
        <li>Create an account in Pypi and/or TestPypi</li>
        <li>
          Create your API token in Pypi or TestPypi using a 2FA application. 
          Save the token in a file .pypirc in your home directory (~). This is 
          the config file used for pypi data/.pypirc
        </li>
        <li>
          Install twine:
          <br />
          <code>python3 -m pip install --upgrade twine</code>  
        </li>
        <li>
          Upload to testpypi or pypi
          <br />
          <code>python3 -m twine upload --repository testpypi dist/*</code>
          <br />
          <code>python3 -m twine upload --repository pypi dist/*</code>  
        </li>
      </ol>

      <p>
        4.1. Install from testpypi:
        <br />
        <code>
          python3 -m pip install --index-url https://test.pypi.org/simple/ your-package
        </code>
      </p>

      <p>  
        4.2. Install from pypi: 
        <br />
        <code>python3 -m pip install your-package</code>
      </p>

      {/* Other sections */}

    </div>
    </div>       
    </div>
  );
};

export default CodingResources;
