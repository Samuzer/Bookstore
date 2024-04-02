import React from "react";
import { CircularProgress, Grid, Stack } from "@mui/material";
import BookCard from "../BookCard/BookCard";
import { useBookContext } from "../../contexts/BookContext";

const BookList = () => {
  const { books, loading } = useBookContext();

  if (loading) {
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Grid container spacing={3}>
      {books.map(book => (
        <BookCard key={book._id} bookDetails={book} />
      ))}
    </Grid>
  );
};

export default BookList;
