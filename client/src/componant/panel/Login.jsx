import React from 'react'
import logo from '../asset/logo.webp'

const Login = () => {
  return (
    <div className='container mx-auto my-auto'>
       <div className='bg-white rounded-[25px]  mt-[240px] ml-[655px] h-[600px] w-[600px] shadow-lg shadow-primary/50'>
            <div className='grid grid-cols-1 gap-4 place-content-center'>
                <img src={logo} alt="" className='h-[85px] w-[265px]' />
            </div>
            <div>
                <form>
                    <input type="text" placeholder='Username' className='focus:none border-b-2 border-primary '/>
                </form>
            </div>
            <div>button</div>
       </div>
    </div>
  )
}

export default Login