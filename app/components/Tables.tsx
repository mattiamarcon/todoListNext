"use server"
import React from 'react'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

interface PropType{
    id:number,
    nome:string,
}

interface taskProp{
    task:PropType
}

function Tables({task}:taskProp){

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
        <td>{nome}</td>
        <td>
            <form action={completaAttivita}>
                <input type="submit" value="COMPLETATO" className=' rounded-md border-2 border-black p-2 cursor-pointer hover:bg-gray-400' />
            </form>
        </td>
    </tr>
  )
}

export default Tables