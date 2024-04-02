import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { StyledFab } from "./AddBookButton.style";

interface AddBookButtonProps {
  onClick: () => void;
}

const AddBookButton = ({ onClick }: AddBookButtonProps) => {
  return (
    <StyledFab color="primary" onClick={onClick}>
      <AddIcon />
    </StyledFab>
  );
};

export default AddBookButton;
