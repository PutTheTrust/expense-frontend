interface ItemProps {
  text: string | number;
  icon: any; // look for icon type
}

const Item: React.FC<ItemProps> = ({ text, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-dark p-2 rounded-lg text-white">{icon}</div>
      <p className="font-medium text-lg">{text}</p>
    </div>
  );
};

export default Item;
