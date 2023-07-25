import { Banknote, Calendar, Landmark, LayoutDashboard } from "lucide-react";
import Item from "./item";

interface CardProps {
  title: string;
  date: string;
  price: number;
  category: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  date,
  price,
  category,
  description,
  title,
}) => {
  return (
    <div className="shadow-1 px-4 py-8 rounded-lg mt-10 max-w-[326px]">
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
