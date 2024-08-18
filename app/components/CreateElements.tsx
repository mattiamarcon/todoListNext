'use server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache';


function CreateElements() {

  async function addTask(formData:FormData){
    'use server'

    const prisma = new PrismaClient();

    const task = formData.get("task");

    await prisma.coseDaFare.create({
      data:{
        nome:task as string,
        fatto:false,
      }
    })

    revalidatePath("/");
  }

  return (
    <form action={addTask}>
        <input id='inputTask' type="text" name='task' placeholder='Inserisci cosa da fare' className='p-5 rounded-md' />
        <button className=' rounded-md border-2 border-black p-5 cursor-pointer'>INSERISCI</button>
    </form>
  )
}

export default CreateElements;