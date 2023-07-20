interface ButtonProps {
  text: string;
  onclick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onclick }) => {
  return (
    <button
      className="bg-custom-green rounded-full h-[44px] px-[5%] text-white"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
