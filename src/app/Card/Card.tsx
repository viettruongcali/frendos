'use client';
import { Grandstander } from 'next/font/google';
import { useState } from 'react';
import { CardType } from './type';

const karla = Grandstander({ subsets: ['latin'] });

const Card = ({ card, generateNewCard, setTopIndex, topIndex, topDeck }:
    { card: CardType, generateNewCard: Function, setTopIndex: Function, topIndex: number, topDeck: Function }) => {

    const { question, note, level }: CardType = card;
    const [discarded, setDiscarded] = useState(false);

    const transformations = [
        "-rotate-[8deg] -translate-x-12",
        "-rotate-[16deg] -translate-x-24",
        "",
        "rotate-[8deg] translate-x-12",
        "rotate-[16deg] translate-x-24",
    ]

    const discardedStyles = `translate-y-full scale-50 hover:scale-75 shadow-none ${transformations[card.index % transformations.length]}`

    const handleClick = () => {
        // console.log(topIndex + " vs " + card.index);
        if (!discarded) {
            // if (topIndex == card.index) {
            generateNewCard()
            // };
            setDiscarded(true);
            setTopIndex(topIndex + 1);
        }
        else {
            setDiscarded(false);
            setTopIndex(card.index);
            // topDeck(card);
        }
    }

    return (
        <div onClick={handleClick} className={`${karla.className} hover:scale-105 ${!discarded && topIndex == card.index ? 'shadow-xl' : 'shadow-none'} ${discarded ? discardedStyles : ''} bg-gradient-to-b from-teal-400 to-teal-700 h-80 w-1/2 p-16 max-w-[500px] rounded-md cursor-pointer duration-200 ease-in-out  shadow-teal-900 hover:shadow-2xl hover:shadow-teal-900 select-none z-50 absolute`}>
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