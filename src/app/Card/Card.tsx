'use client';
import { Grandstander } from 'next/font/google';

const karla = Grandstander({ subsets: ['latin'] });

const Card = ({ question, note, level, randomize }: { question: string, note: string, level: number, randomize: Function }) => {
    return (
        <div onClick={() => { randomize() }} className={`${karla.className} bg-gradient-to-b from-teal-400 to-teal-700 h-80 w-1/2 p-16 max-w-[500px] rounded-md cursor-pointer duration-200 ease-in-out shadow-xl shadow-teal-900 hover:shadow-2xl hover:shadow-teal-900 hover:scale-105 select-none z-50 absolute`}>
            <div className="flex flex-col w-full bg-stone-100 h-full p-8 pb-4 rounded-md border-4 border-teal-700 selection:bg-teal-500 selection:text-white">
                <div className="flex flex-col justify-center grow w-100">
                    <div className="text-center text-teal-700 text-lg font-extralight leading-tight">
                        {question}
                    </div>

                    <div className="text-xs text-teal-700 font-light text-center pt-2">
                        {note}
                    </div>
                </div>

                <div className="flex justify-center ">
                    <span className="text-teal-700 text-xs border-t-2 border-teal-600 px-1 text-center">
                        Level {level}
                    </span>

                </div>
            </div>
        </div>)
}

export default Card;