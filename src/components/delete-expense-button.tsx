import { useState } from "react";
import { Button } from "./ui/button";
import { skipToken } from "@reduxjs/toolkit/query";
import { Trash } from "lucide-react";
import { useDeleteExpenseMutation } from "../apis/expense-api";

interface ButtonProps {
  id: any;
}

const DeleteExpenseButton: React.FC<ButtonProps> = ({ id }) => {
  const [myState] = useState<any>(skipToken); // initialize with skipToken to skip at first
  const [trigger] = useDeleteExpenseMutation(myState);

  const clickHandler = async () => {
    await trigger(id);
    window.location.reload();
  };
  return (
    <Button onClick={clickHandler} variant="destructive">
      <Trash />
    </Button>
  );
};

export default DeleteExpenseButton;
