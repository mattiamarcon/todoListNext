"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

interface propType{
    loading:string,
    standard:string,
}

function Button({loading,standard}:propType) {

   const {pending } = useFormStatus();

  return (
    <button className='border-2 border-black p-5 cursor-pointer bg-black text-white'>
        {pending?loading:standard}
    </button>
  )
}

export default Button