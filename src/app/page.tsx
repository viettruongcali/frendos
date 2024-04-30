import { Grandstander } from 'next/font/google';
import CardContainer from "./Card/CardContainer";
const karla = Grandstander({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen">
      <CardContainer />
    </main>
  );
}
