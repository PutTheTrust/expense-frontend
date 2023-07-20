import { Banknote, Calendar, Landmark, LayoutDashboard } from "lucide-react";
import Item from "./item";

const Card = () => {
  return (
    <div className="shadow-1 px-4 pb-8 rounded-lg mt-10 max-w-[326px]">
      <h2 className="font-semibold text-3xl text-center">Chrunchyroll</h2>

      <div className="space-y-2 mt-8">
        <Item icon={<Calendar />} text="01 July 2023" />
        <Item icon={<Banknote />} text="R49" />
        <Item icon={<LayoutDashboard />} text="Entertainment" />
        <Item icon={<Landmark />} text="Watch anime online" />
      </div>
    </div>
  );
};

export default Card;
