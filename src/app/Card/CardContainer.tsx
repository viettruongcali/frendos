'use client';
import { useState } from 'react';
import questions, { convertToJson } from '../../data/questions';
import Card from './Card';
import DefaultCard from './DefaultCard';
import { CardType } from './type';

const CardContainer = () => {
    const getRandomCard = () => {
        return questions[Math.floor(Math.random() * questions.length)]
    }

    const generateNewCard = () => {
        setCards([...cards, getRandomCard()])
    }

    const topDeck = (topCard: CardType) => {
        const list = [...cards.filter((card: CardType, index: number) =>
            card.question !== topCard.question
        ), topCard];
        setTopIndex(list.length - 1);
        setCards(list);
    }

    const [cards, setCards] = useState([getRandomCard()]);
    const [topIndex, setTopIndex] = useState(0);

    return (
        <div className="p-4 sm:p-0">
            <div className="w-100 flex justify-center relative ">
                {/* <DefaultCard index={0} />
        <DefaultCard index={1} />
        <DefaultCard index={2} />
        <DefaultCard index={3} /> */}
                {
                    cards.map((card, index) => {
                        return (
                            <Card
                                card={{ ...card, index: index }}
                                topDeck={topDeck}
                                generateNewCard={generateNewCard}
                                setTopIndex={setTopIndex}
                                topIndex={topIndex}
                                key={index}
                            />);
                    })
                }
            </div>
        </div>
    )
}

export default CardContainer;