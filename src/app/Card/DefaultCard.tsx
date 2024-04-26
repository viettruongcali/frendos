'use client';
import { Caveat } from 'next/font/google';

const karla = Caveat({ subsets: ['latin'] });

const DefaultCard = ({ index }: { index: number }) => {
    const transformations = [
        "-rotate-[8deg] -translate-x-12",
        "-rotate-[16deg] -translate-x-24",
        "rotate-[8deg] translate-x-12",
        "rotate-[16deg] translate-x-24",
    ]

    return (
        <div className={`flex items-center bg-gradient-to-b ${transformations[index]} from-teal-400 to-teal-700 h-80 w-1/2 p-16 max-w-[500px] rounded-md cursor-pointer duration-200 ease-in-out hover:shadow-2xl select-none absolute`}>
            <div className={`text-white ${karla.className}`}>
                <div className="w-100 text-3xl">{"Let's be"}</div>
                <div className="w-100 text-6xl font-bold">Frendo Blendos</div>
            </div>
        </div>);
}

export default DefaultCard;