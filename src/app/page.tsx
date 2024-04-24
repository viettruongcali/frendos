import { Grandstander } from 'next/font/google';
import CardContainer from "./Card/CardContainer";
const karla = Grandstander({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className={`${karla.className} w-100 text-3xl py-12 text-center`}>
        Frendo 
      </div>
      <CardContainer />
    </main>
  );
}
