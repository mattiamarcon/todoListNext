import { PrismaClient } from '@prisma/client'
import CreateElements from "./components/CreateElements";
import Tables from "./components/Tables";
import Form from './components/Form';



interface PropType{
  id:number,
  nome:string,
}

interface taskProp{
  att:PropType
}

export default async function Home() {

  const prisma = new PrismaClient();


  const attivita:PropType[] =await prisma.coseDaFare.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home page</h1>
      <Form />
      <table className='border-2 border-black rounded-md p-2'>
        <thead>
        <tr className='text-xl font-medium'>
            <th>ATTIVITA'</th>
            <th>COMPLETATO</th>
        </tr>
        </thead>
        <tbody className="">
            {attivita.map((att:PropType) =>(
              <Tables task={att} />
            ))}
        </tbody>
    </table>
    </main>
  );
}
