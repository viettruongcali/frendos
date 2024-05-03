'use client';
import { useEffect, useRef, useState } from 'react';
import questions, { convertToJson } from '../../data/questions';
import Card from './Card';
// import DefaultCard from './DefaultCard';
import { CardType } from './type';

const CardContainer = ({ filters, setFilters }: { filters: any[], setFilters: Function }) => {
    const getRandomCard = () => {
        let onFilters: number[] = [];
        filters.forEach((filter, index) => {
            if (filter.on && !filter.filled) onFilters.push(index);
        })

        if (onFilters.length == 0) {
            filters.forEach((filter, index) => {
                if (!filter.filled) onFilters.push(index);
            })
        };

        const randInt = Math.floor(Math.random() * onFilters.length);
        const randIndex = onFilters[randInt];
        const randDeck = deck[randIndex];
        const randCard = randDeck[deckRef.current[randIndex]];

        if (deckRef.current[randIndex] == deck[randIndex].length - 1) {
            const newFilters = filters.map((filter, index) => {
                if (index == randIndex) return { on: filter.on, filled: true };
                return filter;
            });
            setFilters(newFilters);
        }

        deckRef.current = deckRef.current.map((d, dIndex) => {
            if (dIndex == randIndex) return d + 1;
            return d;
        });
        console.log(randCard);
        return randCard;
    }

    const generateNewCard = () => {
        setCards([...cards, getRandomCard()]);
    }

    const topDeck = (topCard: CardType) => {
        const list = [...cards.filter((card: any, index: number) => {
            return card?.question !== topCard?.question
        }), topCard];
        setTopIndex(list.length - 1);
        setCards(list);
    }

    const shuffleAndSort = (questions: any[]) => {
        let currentIndex = questions.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [questions[currentIndex], questions[randomIndex]] = [
                questions[randomIndex], questions[currentIndex]];
        }

        let sortedDeck: any[] = [[], [], [], []];
        questions.forEach((question: any) => {
            sortedDeck[question.level - 1].push(question);
        })
        return sortedDeck;
    }

    const deck = shuffleAndSort(questions);
    const deckRef = useRef([0, 0, 0, 0]);
    const [cards, setCards] = useState<any[]>([]);
    const [topIndex, setTopIndex] = useState(0);

    useEffect(() => {
        setCards([...cards, getRandomCard()]);
    }, [])

    return (
        <div>
            <div className="p-4 sm:p-0 mt-6">
                <div className="w-100 flex justify-center relative ">
                    {
                        cards.map((card: any, index) => {
                            if (card?.question)
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

        </div>

    )
}

export default CardContainer;