import React from "react";
import useAuth from "../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";

const FoodCard = ({ foodItems }) => {
  const { user } = useAuth();
   console.log(user);
   
  const { _id, name, recipe, image, category, price } = foodItems;
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart()

  const handleFoodCart = (food) => {
    const foodCartItems = {
      meuId: _id,
      email: user.email,
      name,
      image,
      price,
    };

    axiosSecure.post("/carts", foodCartItems).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your  cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        // call refetch to update the cart items  
        refetch()
      }
    });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleFoodCart(foodItems)}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
