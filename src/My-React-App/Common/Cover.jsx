import React from 'react';


  

const Cover = ({coverImg}) => {
    return (
        <div>
            <div
  class="hero h-[500px]"
  style={{
    backgroundImage: `url(${coverImg})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Cover;