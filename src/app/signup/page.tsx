"use client";

import React from "react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name as string,
      email: user.email as string,
      password: user.password as string,
      callbackURL: "/",
    });

    if (error) {
      toast.error(`Sign-up failed: ${error.message}`);
      return;
    }

    if (data) {
      toast.success("Sign-up successful!");

      setTimeout(() => {
        redirect("/");
      }, 1500);
    }
  };

  
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
    <>
      <div className="flex justify-center items-center container mx-auto h-screen">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-gray-400 rounded-box w-xs border p-4">
            
            <legend className="font-semibold text-white p-2 px-5 bg-red-700 rounded mx-auto">
              Sign Up
            </legend>

            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button
              type="submit"
              className="btn bg-red-700 text-white mt-4"
            >
              Sign Up
            </button>

            <p className="mx-auto mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 hover:underline"
              >
                Sign-in
              </a>
            </p>

          </fieldset>
        </form>
         <button onClick={handleGoggleSignIn} className='btn'>Sign In  With Goggle</button>
 <button onClick={handleGithubSignIn} className='btn'>Sign In  With Github</button>
      </div>

      <ToastContainer />
    </>
  );
};

export default SignUpPage;