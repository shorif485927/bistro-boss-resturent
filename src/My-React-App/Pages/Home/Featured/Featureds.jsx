import React from 'react';
import SectionTitle from '../../../Common/SectionTitle';
import featuredImage from '../../../../assets/home/featured.jpg'
import '../../Home/Featured/Featureds.css'

const Featureds = () => {
    return (
        <section className='featured_section bg-fixed'>

            <SectionTitle></SectionTitle>
                
                <div className=' featured flex gap-8 p-20'>
                        <div><img src={featuredImage} alt="" /></div>
                         <div>
                             <h1>20 marh,2019</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem harum vero blanditiis qui praesentium, reiciendis quam. Explicabo quod natus cupiditate officia deleniti magni nulla omnis? Qui expedita molestiae ea unde perspiciatis reprehenderit neque nostrum dolor tempore fuga, nobis consequuntur repudiandae suscipit perferendis cum itaque. Non atque aliquid temporibus ipsum.</p>

                               <button className="btn btn-outline border-0 border-b-4">red more</button>
                         </div>
                </div>
            
        </section>
    );
};

export default Featureds;