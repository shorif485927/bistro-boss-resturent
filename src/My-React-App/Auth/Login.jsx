import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogIn from './SocialLogIn';


const Login = () => {
        const {logIn} = useContext(AuthContext)
        const [disable , setDisable] =  useState(true)
        const captchaRef = useRef(null)
    
     useEffect(() => {
        loadCaptchaEnginge(6); 
     },[])

      const handleLogin = e => {
         e.preventDefault();

         const formData = e.target;
          const email = formData.email.value;
          const password = formData.password.value;

          logIn(email,password)
          .then( result => {
                const loggedInUser = result.user
          })

           
      }

       const handleValidateCaptcha = () => {
                    const user_captcha_value = captchaRef.current.value;
                     
                    if(validateCaptcha(user_captcha_value)){
                            setDisable(false)
                    }else{
                            setDisable(true)
                    }
       }

    return (
        <div>
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <form className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl" onSubmit={handleLogin}>
      <div className="card-body">

        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <label className="fieldset-label">
          <LoadCanvasTemplate />
          </label>
                  <input ref={captchaRef} type="text"  name='captue' placeholder='write this captcha' />
                 
                    <button onClick={handleValidateCaptcha} className="btn">validate</button>

            

          <button disabled={disable} className="btn btn-neutral mt-4" > Log In</button>
                      <p className='my-10'>or </p>
                         
                      <div> 
                       <SocialLogIn></SocialLogIn>
                    </div>
        </fieldset>

      </div>
    </form>

                  
  </div>
</div>
        </div>
    );
};

export default Login;