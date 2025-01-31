import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>

              <div>
                  <h1 className="sub_title">{subHeading}</h1>
                  <h1 className="title">{heading}</h1>
              </div>
            
        </div>
    );
};

export default SectionTitle;