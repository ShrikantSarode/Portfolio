import React from "react";

const About = () => {
  return (
    <>
   
      <div id="About">
        <h1 id="about-heading" align="center">
          Services We Provide
        </h1>
       
        <div id="card-frame">
          <div className="card">
            <div className="card-content">
              <h3 className="card-heading"> Web Development</h3>
              <p className="card-text"> </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-heading"> Java Development</h3>
              <p className="card-text"> </p>
            </div>
          </div>

          <div className="card" >
            <div className="card-content">
              <h3 className="card-heading"> Back-End Development</h3>
              <p className="card-text"> </p>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-heading"> UI/UX</h3>
              <p className="card-text"> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
