import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import BookList from "../components/BookList/BookList";
import AddBookButton from "../components/AddBookButton/AddBookButton";
import AddBookModal from "../components/AddBookModal/AddBookModal";

const Main = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box p={3}>
      <Typography variant="h2" textAlign="center" mb={3}>
        Bookstore Catalog
      </Typography>
      <BookList />
      <AddBookButton onClick={() => setOpen(true)} />
      <AddBookModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default Main;
