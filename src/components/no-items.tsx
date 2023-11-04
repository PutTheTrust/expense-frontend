interface INoItemsProps {
  text: string;
}

const NoItems: React.FC<INoItemsProps> = ({ text }) => {
  return (
    <div className="bg-[#272D35] text-white h-[177px] max-h-[217px] rounded-[10px] p-4">
      <p>{text}</p>
    </div>
  );
};

export default NoItems;
