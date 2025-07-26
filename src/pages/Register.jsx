import React from "react";
import {useForm} from "react-hook-form"
import {nanoid} from 'nanoid'
import { Link, useNavigate } from "react-router-dom";



const Register = () => {

  const {register, reset, handleSubmit} = useForm()
  
  const navigate = useNavigate()

const Registerhandler = (user) =>{
    user.id = nanoid()
    user.isAdmin = false;
    user.cart = []
    console.log(user)
    
    navigate("/Login")
  }


  return  (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full  flex flex-col justify-center lg:px-8 max-w-xl py-6 bg-white rounded-2xl shadow-2xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h1 className="mx-auto text-4xl w-auto text-center font-medium text-gray-400 font-serif">
            Welcome
          </h1>
          <h2 className="text-center text-xl tracking-tight text-gray-900  ">
            Register to your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(Registerhandler)}>
            <div className="mb-4">
              <label className="block text-1xl text-gray-600  ">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="block w-full rounded-md bg-gray-200 mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-1xl text-gray-600  ">
                Username
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="Enter your useRegister"
                className="block w-full rounded-md bg-gray-200 mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
              />
            </div>

            <div className="mb-4">
              <label className="block text-1xl text-gray-600  ">
                Email address
              </label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your ragister email"
                className="block w-full rounded-md bg-gray-200 mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-1xl text-gray-600  ">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="block w-full rounded-md bg-gray-200 mt-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-700">
          Not a member? <Link className="text-blue-500"  to='/Login'>Login your account</Link> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
