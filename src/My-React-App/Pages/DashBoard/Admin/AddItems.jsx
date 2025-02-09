import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const image_Hosting_Key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`


const addItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {
    
        const imageFile = {image : data.image[0]}
         const res = await axiosPublic.post(image_Hosting_Api,imageFile,{
            headers : {
                'content-type' : 'multipart/form-data'
            }
         })
          console.log(res.data);
          
    };


    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* recipe name */}

        <fieldset className="fieldset">
  <legend className="fieldset-legend">recipe name</legend>
  <input {...register('name')} type="text" className="input" placeholder="Type here" />

</fieldset>

                    <div className='flex gap-x-2 '>
                        <div>
                        <select {...register("category")}
         defaultValue="Pick a font" className="select select-ghost">

  <option disabled={true} >Select a catagory</option>
  <option>salad</option>
  <option>pizza</option>
  <option>soup</option>
  <option>dessert</option>
  <option>drinks</option>
 
</select>
                        </div>

                        <div>
                        <fieldset className="fieldset">
  <legend className="fieldset-legend">Price</legend>
  <input  {...register('price')} type="text" className="input" placeholder="Type here" />

</fieldset>
                        </div>
                    </div>

                    <fieldset className="fieldset">
  <legend className="fieldset-legend">recipe details</legend>
  <input  {...register('recipe')} type="text" className="input" placeholder="Type here" />

</fieldset>

            <div>
            <input {...register('image')} type="file" className="file-input file-input-ghost" />
            </div>
 
                    <button className="btn">add item</button>
      </form>
    );
};

export default addItems;