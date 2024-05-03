'use client';
import { Raleway } from 'next/font/google';
import CardContainer from "./Card/CardContainer";
import LevelButton from './LevelButton/LevelButton';
import { useState } from 'react';
const karla = Raleway({ subsets: ['latin'] });

export default function Home() {
  const filterObject = {
    on: false,
    filled: false,
  }
  const [filters, setFilters] = useState([filterObject, filterObject, filterObject, filterObject]);

  return (
    <main className="min-h-screen">
      <div className="flex justify-center pt-8">
        {
          Array(4).fill(0).map((_val, index) => {
            return <LevelButton key={index} index={index} filters={filters} setFilters={setFilters} />
          })
        }
      </div>
      <CardContainer filters={filters} setFilters={setFilters} />
    </main>
  );
}
