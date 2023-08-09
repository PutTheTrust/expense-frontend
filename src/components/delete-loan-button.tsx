import { useState } from "react";
import { useDeleteLoanMutation } from "../apis/loan-api";
import { Button } from "./ui/button";
import { skipToken } from "@reduxjs/toolkit/query";
import { Trash } from "lucide-react";

interface ButtonProps {
  id: any;
}

const DeleteLoanButton: React.FC<ButtonProps> = ({ id }) => {
  const [myState] = useState<any>(skipToken); // initialize with skipToken to skip at first
  const [trigger] = useDeleteLoanMutation(myState);

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

export default DeleteLoanButton;
