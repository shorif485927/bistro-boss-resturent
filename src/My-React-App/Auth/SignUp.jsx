import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SignUp = () => {
             const {creatUser,updateUserProfile} = useContext(AuthContext);
             const axiosPublic = useAxiosPublic()
            const handleSignUp = (e) => {
                      e.preventDefault();
                      const formData = e.target;
                      const name = formData.name.value;
                      const photourl = formData.photourl.value;
                      const email = formData.email.value;
                      const password = formData.password.value;

                      creatUser(email,password)
                      .then(result =>{
                      
                         updateUserProfile(name,photourl)
                         .then(() => {

                          const userInfo = {
                            name : name,
                            email : email
                          }
                         
                          axiosPublic.post('/users', userInfo)
                          .then(res => {
                             const newUser = res.data;
                             if(newUser.insertedId){
                              alert('registerd succesfully')
                             }
                          })
                          .catch(err => console.log(err))
                            
                         })
                         .catch(err => console.log(err))
                      } )
            }
    return (
        <div>
            

             <div>
                 <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
            </div>

            <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleSignUp}>
              <div className="card-body">
        
                <fieldset className="fieldset">

                <label className="fieldset-label">Name</label>
                <input type="text" name='name' className="input" placeholder="name" />

                <label className="fieldset-label">photo</label>
                <input type="text" name='photourl' className="input" placeholder="photo url" />


                <label className="fieldset-label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />


        
                  <label className="fieldset-label">Password</label>
                  <input type="password" name='password' className="input" placeholder="Password" />
        

                  <button  className="btn btn-neutral mt-4" > signUp</button>
                </fieldset>
        
              </div>
            </form>

          </div>
        </div>
                </div>


        </div>
    );
};

export default SignUp;