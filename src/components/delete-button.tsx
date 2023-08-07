import { useState } from "react";
import { useDeleteLoanMutation } from "../apis/loan-api";
import { Button } from "./ui/button";
import { skipToken } from "@reduxjs/toolkit/query";

interface ButtonProps {
  id: any;
}

const DeleteButton: React.FC<ButtonProps> = ({ id }) => {
  const [myState] = useState<any>(skipToken); // initialize with skipToken to skip at first
  const [trigger] = useDeleteLoanMutation(myState);
  return (
    <Button onClick={() => trigger(id)} variant="destructive">
      Delete
    </Button>
  );
};

export default DeleteButton;
