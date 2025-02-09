import React from 'react';

import { MdDelete } from "react-icons/md";
import useCart from '../../../Hooks/useCart';
import Swal from 'sweetalert2';


const Cart = () => {
           const [cart,refetch] = useCart();
           const totalPrice = cart.reduce((total,item) => total + item.price , 0)
          //  const { _id, name, recipe, image, category, price } = cart;
          const axiosSecure = useAxiosSecure()

          const deleteCartItems = id => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
  
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                        // if(res.data.deletedCount){
                        //   Swal.fire({
                        //     title: "Deleted!",
                        //     text: "Your file has been deleted.",
                        //     icon: "success"
                        //   });
        
                        // }
                        refetch()
            
                })


              
              }
            });
          }


      

    return (
        <div>
                    <div className='flex text-3xl capitalize font-semibold gap-x-40'>
                          <h1>total order : {cart.length} </h1>
                          <h1>total  price : {totalPrice} </h1>
                          <button className="btn btn-success">pay</button>
                    </div>

                        {/*  user cart items table  */}
                    <div>
                    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>image</th>
        <th>catagory</th>
        <th>price</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
        {/* table row  */}
                {
                    cart.map((cartItem,index) =>         
      <tr>
      <th> {index +1} </th>
      <td>{cartItem.name} </td>
      <td>
      <img src={cartItem.image} className='w-[100px]' alt="" />   
     </td>
      <td>{cartItem.catagory} </td>
      <td>{cartItem.price} </td>
      <td>  
         <button onClick={()=> deleteCartItems(cartItem._id)} className="btn">
          <MdDelete></MdDelete>
        </button>
         </td>

    </tr>

                    )
                }
    
    </tbody>
  </table>
</div>
                    </div>
        </div>
    );
};

export default Cart;