import React from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  IconButton,
  CircularProgress
} from "@mui/material";
import bookPlaceholder from "../images/default-placeholder.png";
import BookDetailField from "../components/BookDetailField/BookDetailField";
import { ArrowBack } from "@mui/icons-material";
import { useBookContext } from "../contexts/BookContext";

const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { books, loading } = useBookContext();

  const book = books.find(book => book._id === id);

  if (loading) {
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );
  }

  if (!book) {
    return <Navigate to="/" />;
  }

  return (
    <Box p={3}>
      <IconButton onClick={() => navigate("/")} sx={{ mb: 3 }}>
        <ArrowBack />
      </IconButton>
      <Box pl={6}>
        <Stack direction="row" alignItems="end" spacing={6} mb={6}>
          <img alt="book-placeholder" src={bookPlaceholder} width={200} />
          <Box>
            <Typography variant="h2">{book.title}</Typography>
            <Typography variant="h5">{`$${book.price}`}</Typography>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="end" spacing={6} mb={6}>
          <BookDetailField label="Author" value={book.author} />
          <BookDetailField label="Genre" value={book.genre} />
        </Stack>
        <BookDetailField label="Description" value={book.description} />
      </Box>
    </Box>
  );
};

export default BookDetails;
