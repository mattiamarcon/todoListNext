'use server';
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function addTask(formData:FormData){
    
    const prisma = new PrismaClient();

    const task = formData.get("task");

    await prisma.coseDaFare.create({
      data:{
        nome:task as string,
      }
    })

    revalidatePath("/");
  }