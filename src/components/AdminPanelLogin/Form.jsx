import React from 'react'

// const accounts = [
//   {
//     username: "admin",
//     password: "123"
//   },
// ]

const Form = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='p-4 bg-secondary max-w-[500px] rounded'>
          <h1 className='text-center font-bold text-2xl p-8 pt-0'>Admin Panel Login</h1>
          <form className='flex flex-col gap-2'>
            <label for='username'>Username</label>
            <input type='text' id='username' name='username' placeholder='username' className='mb-4 rounded bg-primary p-1 pl-2'></input>
            <label for='password'>Password</label>
            <input type='password' id='password' name='password' placeholder='password' className='mb-4 rounded bg-primary p-1 pl-2'></input>
            <input type='submit' value='Login' className='rounded-md bg-primary p-2 px-8 border border-[#ffffff] border-opacity-25 hover:bg-middle hover:cursor-pointer'></input>
          </form>
        </div>
    </div>
  )
}

export default Form
