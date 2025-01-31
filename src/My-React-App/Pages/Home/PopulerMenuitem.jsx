import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import MenuItem from '../../Common/MenuItem';
import UseMenu from '../../Hooks/UseMenu';

const PopulerMenuitem = () => {
      
      const [menu] = UseMenu();
      const populerMenu = menu.filter(d => d.category === 'popular')
                

           
    return (
        <section className=' '>
                    <SectionTitle></SectionTitle>

                      <div className='grid grid-cols-2 gap-4 my-14'>
                          {
                            populerMenu.map(item => <MenuItem key={item?._id} items={item}></MenuItem>)
                          }
                      </div>
        </section>
    );
};

export default PopulerMenuitem;