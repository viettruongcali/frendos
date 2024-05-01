'use client';
import { Schibsted_Grotesk } from 'next/font/google';
import { useState } from 'react';
const karla = Schibsted_Grotesk({ subsets: ['latin'] });

const LevelButton = ({ index, filters, setFilters }: { index: number, filters: Boolean[], setFilters: Function }) => {
    const [selected, setSelected] = useState(false);
    const selectedStyles = "bg-teal-500 text-teal-50 hover:bg-teal-400 hover:border-teal-500 border-teal-500";
    const notSelectedStyles = "bg-white text-teal-500 hover:bg-teal-50 border-teal-500"

    const handleClick = () => {
        setFilters(filters.map((filter, filterIndex) => {
            if (filterIndex == index) return !selected;
            else return filter;
        }))
        setSelected(!selected);
    }

    return (
        <button className={`${karla.className} p-2 px-6 mx-4 rounded-full font-medium  ${selected ? selectedStyles : notSelectedStyles} border-2 duration-200`}
            onClick={handleClick}>
            Level {index + 1}
        </button>
    );
}

export default LevelButton;

