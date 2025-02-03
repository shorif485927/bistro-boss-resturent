import React from 'react';
import MenuItem from '../../Common/MenuItem';
import Cover from '../../Common/Cover';
import { Link } from 'react-router-dom';

const Menu_catagory = ({items,title, coverImg}) => {
    return (
        <div>
                    {
                        title && <Cover coverImg={coverImg} title={title}></Cover>
                    }

                  <div className='grid grid-cols-2 gap-4 my-14'>
                                      {
                                        items.map(item => <MenuItem key={item?._id} items={item}></MenuItem>)
                                      }
                                  </div>
                                   <Link to={`/shop/${title}`}>
                                   <button className="btn btn-outline border-0 border-b-4">red more</button>
                                   </Link>

        </div>
    );
};

export default Menu_catagory;