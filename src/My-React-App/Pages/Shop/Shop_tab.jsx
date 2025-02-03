import React from 'react';
import FoodCard from '../../Common/FoodCard';

const Shop_tab = ({items}) => {
    return (
        <div>
               <div className='grid grid-cols-3 gap-20 my-14'>
              {items.map(item => <FoodCard key={item?._id} foodItems={item}></FoodCard>)}
           </div>
        </div>
    );
};

export default Shop_tab;