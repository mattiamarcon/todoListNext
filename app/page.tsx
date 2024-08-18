import { PrismaClient } from '@prisma/client'
import CreateElements from "./components/CreateElements";
import Tables from "./components/Tables";

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
      <CreateElements />
      <table>
        <thead>
        <tr>
            <th>ATTIVITA'</th>
            <th>COMPLETATO</th>
        </tr>
        </thead>
        <tbody>
          {attivita.map((att:PropType) =>(
            <Tables task={att} />
          ))}
        </tbody>
    </table>
    </main>
  );
}
