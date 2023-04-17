import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      const auth = localStorage.getItem('user');
      if (auth) {
          navigate('/login')
      }
  },[])

  const collectData = async () => {
      console.warn("name, email, password",name, email, password);
      let result = await fetch("http://localhost:5000/register", {
          method: 'post',
          body: JSON.stringify({ name, email, password }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      result = await result.json();
      console.warn(result);
        localStorage.setItem('user', JSON.stringify(result));
        localStorage.setItem('token', JSON.stringify(result));

      navigate('/')
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-secoundery w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input type="text" className="block border border-secoundery w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" 
          value={name} onChange={(e) => setName(e.target.value)}/>

          <input type="text" className="block border border-secoundery w-full p-3 rounded mb-4" name="email" placeholder="Email"
           value={email} onChange={(e) => setEmail(e.target.value)}/>

          <input type="password" className="block border border-secoundery w-full p-3 rounded mb-4" name="password" placeholder="Password" 
          value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button onClick={collectData} type="submit" className="w-full text-center py-3 rounded bg-primary text-white hover:bg-secoundery focus:outline-none my-1">Create Account</button>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a> and
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="text-grey-dark mt-6">
          Already have an account?
          <a className="no-underline border-b border-blue text-blue" href="../login/">
            Log in
          </a>.
        </div>
      </div>
    </div>
  )
}

export default Signup