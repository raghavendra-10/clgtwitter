import React from 'react';
import { FaUsers, FaLock, FaUser, FaAnchor, FaScissors } from 'react-icons/fa';

const Sample = () => {
  return (
    <section className="wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-10 center-col text-center icon-box">
            <FaUsers className="i-large-box i-plain" />
            <FaLock className="i-large-box i-plain" />
            <FaUser className="i-large-box i-plain" />
            <FaAnchor className="i-large-box i-plain" />
            <FaScissors className="i-large-box i-plain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sample;
