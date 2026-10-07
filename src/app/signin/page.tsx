'use client'
import React from 'react';
import { authClient } from '../lib/auth-client';
import { ToastContainer, toast } from "react-toastify";
import { redirect } from 'next/navigation';

const SignInPage = () => {
    const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {email :string , password:string}

      const {data, error} = await authClient.signIn.email({
            ...user,
            callbackURL: "/"
        })
        if(data){
           toast.success("sign-in successfully")
            redirect('/');
             setTimeout(() => {
    redirect("/");
  }, 1000);
        }
        if(error) {
            toast.error('sign-in failed!')
        }
    }

    const handleGoggleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
    }

    const handleGithubSignIn = async() => {
    const data = await authClient.signIn.social({
    provider: "github",
  });
  }
    return (
        <div className='flex justify-center items-center container mx-auto h-screen'>
            <form onSubmit ={onSubmit}>
            <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box w-xs border p-4">
  <legend className="font-semibold text-white p-2 px-5 bg-red-700 rounded mx-auto">Sign In</legend>


  <label className="label">Email</label>
  <input name='email'  type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name='password' type="password" className="input" placeholder="Password" />

  <button type='submit' className="btn  bg-red-700 text-white mt-4">Sign In</button>
    <p className="mx-auto mt-4 text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign-up</a></p>
    
 <button onClick={handleGoggleSignIn} className='btn'>Sign In  With Goggle</button>
 <button onClick={handleGithubSignIn} className='btn'>Sign In  With Github</button>
</fieldset>
           </form>

          
        </div>
    );
};

export default SignInPage;