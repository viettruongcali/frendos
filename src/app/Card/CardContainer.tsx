'use client';
import { useEffect, useRef, useState } from 'react';
import questions, { convertToJson } from '../../data/questions';
import Card from './Card';
import DefaultCard from './DefaultCard';
import { CardType } from './type';

const CardContainer = ({ filters }: { filters: Boolean[] }) => {
    const getRandomCard = () => {
        if (deckRef.current == deck.length - 1) {
            return { question: "", level: null, note: "" };
        }
        const rand = deck[deckRef.current];
        deckRef.current = deckRef.current + 1;
        return rand;
    }

    const generateNewCard = () => {
        setCards([...cards, getRandomCard()]);
    }

    const topDeck = (topCard: CardType) => {
        const list = [...cards.filter((card: any, index: number) => {
            return card.question !== topCard.question
        }), topCard];
        setTopIndex(list.length - 1);
        setCards(list);
    }

    const shuffleAndSort = (array: object[]) => {
        let currentIndex = array.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        // let sortedDeck = [[], [], [], []];

        return array;
    }

    const deck = shuffleAndSort(questions);
    const deckRef = useRef(0);
    const [cards, setCards] = useState([deck[0]]);
    const [topIndex, setTopIndex] = useState(0);

    return (
        <div className="p-4 sm:p-0 mt-6">
            <div className="w-100 flex justify-center relative ">
                {
                    cards.map((card: any, index) => {
                        if (card.question)
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