"use client";

import getApi from "@/api/get-sessao";
import { useEffect, useState } from "react";

type ApiProps = {
  id: number;
  title: string;
  text: string;
};

export default function Mission() {
  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        setCards(identities);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center h-full"
          >
            <h1 className="text-2xl font-helveticaRounded mb-4">{card.title}</h1>
            <p className="text-gray-600 font-helveticaLight">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
