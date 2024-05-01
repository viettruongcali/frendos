'use client';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';
import { CardType } from './type';

const karla = Montserrat({ subsets: ['latin'] });

const Card = ({ card, generateNewCard, setTopIndex, topIndex, topDeck }:
    { card: CardType, generateNewCard: Function, setTopIndex: Function, topIndex: number, topDeck: Function }) => {

    const { question, note, level }: CardType = card;
    const [discarded, setDiscarded] = useState(false);

    // const transformations = [
    //     "-rotate-[8deg] -translate-x-12",
    //     "-rotate-[16deg] -translate-x-24",
    //     "",
    //     "rotate-[8deg] translate-x-12",
    //     "rotate-[16deg] translate-x-24",
    // ]

    const discardedStyles = `translate-y-full scale-50 sm:hover:scale-75 ${topIndex - 1 === card?.index ? `shadow-xl` : ''}`

    const handleClick = () => {
        if (!discarded) {
            generateNewCard();
            setDiscarded(true);
            setTopIndex(topIndex + 1);
        }
        else {
            setDiscarded(false);
            topDeck(card);
        }
    }

    return (
        <div onClick={handleClick} className={`${karla.className} w-100 sm:m-0  ${!discarded && topIndex == card.index ? 'shadow-md' : 'shadow-none'} ${discarded ? discardedStyles : 'sm:hover:scale-105'} bg-gradient-to-b from-teal-400 to-teal-700 h-80 sm:h-80 w-full md:w-1/2 p-[24px] sm:p-[3%] lg:p-8 max-w-[500px] rounded-md cursor-pointer duration-200 ease-in-out  shadow-teal-900 sm:hover:shadow-2xl sm:hover:shadow-teal-900 select-none z-50 absolute`}>
            <div className="flex flex-col w-full bg-stone-100 h-full p-8 pb-4 rounded-md border-4 border-teal-700 selection:bg-teal-500 selection:text-white">
                <div className="flex flex-col justify-center grow w-100">
                    <div className="text-center text-teal-700 text-lg font-light leading-tight">
                        {question}
                    </div>

                    <div className="text-xs text-teal-700 font-light text-center pt-2">
                        {note}
                    </div>
                </div>

                <div className="flex justify-center ">
                    <span className="text-teal-700 text-xs border-t-[1px] border-teal-600 px-1 pt-1 text-center">
                        Level {level}
                    </span>
                </div>
            </div>
        </div>)
}

export default Card;