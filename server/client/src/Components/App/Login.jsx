import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import logo from '../App/asset/logo.webp'
import {toast } from 'react-toastify';



const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {

      navigate("/dashboard");

    }
  }, [])

  const handleLogin = async () => {
    
    console.warn("email, password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', JSON.stringify(result.token));
      toast.success('Access Guaranteed', {
        position: "top-center",
        theme:"colored",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      navigate("/dashboard");
    } else {
      toast.error('Access Denied', {
        position: "top-center",
        theme: "colored",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    };
  }


  return (
    <div className="bg-white dark:bg-secoundery">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="text-center mb-20">
              <img className="mx-auto w-48 " src={logo} alt="logo" />
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="relative mb-8">
                <input className="w-full h-10 text-secoundery placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-primary"
                value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" placeholder="john@doe.com" required/>
                <label className="absolute left-0 -top-3.5 font-semibold text-secoundery text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secoundery peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-sm .focus-input100::after">Email
                  address</label>
              </div>
              <div className="relative mb-8">
                <input className="w-full h-10 text-secoundery placeholder-transparent border-b-2 border-gray-300 peer focus:outline-none focus:border-primary" 
                 value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password"/>
                <label className="absolute left-0 font-semibold -top-3.5 text-secoundery text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-secoundery peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-sm">
                  Password</label>
              </div>
              <div className="grid justify-items-center">
                <button onClick={handleLogin} type="button" className=" w-2/4 text-white bg-primary hover:bg-secoundery focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-[18px] px-5 py-4 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Login</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login;