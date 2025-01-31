import React from 'react';

const MenuItem = ({items}) => {
    return (
        <div className='menu_items_card flex gap-8'>
              <div>
              <img style={{borderRadius : ' 0 200px 200px 200px'}} className='w-[100px]' src={items.image} alt="" />
              </div>
              <div>
                  <h1> {items.name} -------------- </h1>
                  <p>{items.recipe} </p>
              </div>

                    <div>
                    <p> {items.price} </p>
                    </div>
        </div>
    );
};

export default MenuItem ;