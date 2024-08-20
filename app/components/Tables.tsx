"use server"
import React from 'react'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import Button from './Button'

interface PropType{
    id:number,
    nome:string,
}

interface taskProp{
    task:PropType
}

async function Tables({task}:taskProp){

    const {id,nome}= task;

    async function completaAttivita(formData:FormData) {
    "use server"

    const prisma= new PrismaClient();

    await prisma.coseDaFare.delete({
        where:{
            id:id,
        }
    })

    revalidatePath("/");
}

  return (
    <tr key={id}>
        <td className='p-5 text-xl font-medium'>{nome}</td>
        <td className='p-2'>
            <form action={completaAttivita}>
            <Button loading='ELIMINAZIONE...' standard='COMPLETATO' />
            </form>
        </td>        
    </tr>
  )
}

export default Tables