interface BalanceCardProps {
  title: string;
  text: string;
  icon: any;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, text, icon }) => {
  return (
    <div className="bg-[#272D35] text-white max-h-36 md:h-[160px] rounded-[10px] p-4">
      <div className="flex justify-start">
        <div className="bg-black p-3 rounded-full">{icon}</div>
      </div>
      <h2 className="mt-2 uppercase font-medium text-sm">{title}</h2>
      <p className="font-bold text-xl tracking-wide mt-2">{text}</p>
    </div>
  );
};

export default BalanceCard;
