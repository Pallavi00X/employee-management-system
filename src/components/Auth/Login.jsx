import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
   console.log("email is:", email)
   console.log("password is:", password)

   setEmail("")
   setPassword("")

  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='gap-6 flex flex-col items-center justify-center'>

          <input
          value={email}
          onChange={(e)=>{
              setEmail(e.target.value)
          }}
           required  className=' outline-none border-2 border-emerald-600 text-xl py-4 px-6 rounded-full bg-transparent placeholder:text-gray-400' type= "email" placeholder='Enter your email....'
           />
          <input 
          value={password}  
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required  className='outline-none border-2 border-emerald-600 text-xl py-4 px-6 rounded-full bg-transparent placeholder:text-gray-400'  type="password" placeholder='Enter Password....'
          />
          <button className=' mt-7 outline-none border-2 bg-emerald-600 text-xl py-4 px-6 rounded-full  placeholder:text-gray-500'  >Log in</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
