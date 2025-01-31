import React from 'react';
import Banner from './Banner';
import PopulerMenuitem from './PopulerMenuitem';
import Featureds from './Featured/Featureds';
import Catagory from './Catagory';


const Home = () => {
    return (
        <div className=''>
                <Banner></Banner>
                 <Catagory></Catagory>
                 <PopulerMenuitem></PopulerMenuitem>
                 <Featureds></Featureds>
        </div>
    );
};

export default Home;