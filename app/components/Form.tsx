"use client";
import React, { useRef } from 'react'
import { addTask } from '@/actions/actions';
import Button from './Button';

function Form() {

    const ref=useRef<HTMLFormElement>(null)

    return (
        <form ref={ref} action={async (formData)=>{
            ref.current?.reset();

            await addTask(formData);
        }} className='flex flex-row'>
            <input id='inputTask' type="text" name='task' placeholder='Inserisci cosa da fare' className='p-5' />
            <Button loading='Caricamento...' standard='Aggiungi' />
        </form>
      )
}

export default Form