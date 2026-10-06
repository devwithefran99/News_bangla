import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex justify-center items-center container mx-auto h-screen'>
            <form>
            <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box w-xs border p-4">
  <legend className="font-semibold text-white p-2 px-5 bg-red-700 rounded mx-auto">Sign In</legend>


  <label className="label">Email</label>
  <input  type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn  bg-red-700 text-white mt-4">Sign In</button>
    <p className="mx-auto mt-4 text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign-up</a></p>
    
</fieldset>
           </form>
        </div>
    );
};

export default SignInPage;