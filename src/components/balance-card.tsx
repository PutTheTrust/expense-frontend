interface BalanceCardProps {
  title: string;
  total: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, total }) => {
  return (
    <div className="bg-[#272D35] text-white h-32 rounded-[10px] p-4">
      <h2>{title}</h2>
      <p className="font-bold text-xl tracking-wide mt-2">R{total}</p>
    </div>
  );
};

export default BalanceCard;
