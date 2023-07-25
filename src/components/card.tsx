import {
  Banknote,
  Calendar,
  Landmark,
  LayoutDashboard,
  Trash,
} from "lucide-react";
import Item from "./item";
import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useDeleteExpenseMutation } from "../apis/expense-api";

interface CardProps {
  title: string;
  date: string;
  price: number;
  category: string;
  description: string;
  id: string;
}

const Card: React.FC<CardProps> = ({
  date,
  price,
  category,
  description,
  title,
  id,
}) => {
  const [myState] = useState<any>(skipToken); // initialize with skipToken to skip at first
  const [trigger] = useDeleteExpenseMutation(myState);

  const deleteExpense = (id: string) => {
    trigger(id);
  };
  return (
    <div className="shadow-1 px-4 py-10 rounded-lg mt-10 max-w-[326px] relative">
      <button
        className="absolute top-2 right-2 bg-red-600 p-1 rounded-md"
        onClick={() => deleteExpense(id)}
      >
        <Trash />
      </button>
      <h2 className="font-semibold text-3xl text-center">{title}</h2>

      <div className="space-y-2 mt-8">
        <Item icon={<Calendar />} text={date} />
        <Item icon={<Banknote />} text={price} />
        <Item icon={<LayoutDashboard />} text={category} />
        <Item icon={<Landmark />} text={description} />
      </div>
    </div>
  );
};

export default Card;
