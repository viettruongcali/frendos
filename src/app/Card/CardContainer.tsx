'use client';
import { Grandstander } from 'next/font/google';
import { useState } from 'react';
import questions from '../../data/questions';
import Card from './Card';
import DefaultCard from './DefaultCard';


const karla = Grandstander({ subsets: ['latin'] });

const CardContainer = () => {
    const randomize = () => {
        const random = Math.floor(Math.random() * questions.length);
        setCard(questions[random]);
    }

    const [card, setCard] = useState(questions[0]);
    return <div className="w-100 flex justify-center relative">
        <DefaultCard index={0} />
        <DefaultCard index={1} />
        <DefaultCard index={2} />
        <DefaultCard index={3} />
        
        <Card question={card.question} note={card.note} level={card.level} randomize={randomize} />
    </div>
}

export default CardContainer;