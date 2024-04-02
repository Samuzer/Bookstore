import React from "react";
import { Book as BookType } from "../../interfaces/book.interfaces";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import bookPlaceholder from "../../images/default-placeholder.png";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { StyledIconButton } from "./BookCard.style";
import { deleteBook } from "../../apis/bookApis";
import { useBookContext } from "../../contexts/BookContext";

interface BookCardProps {
  bookDetails: BookType;
}

const BookCard = ({ bookDetails }: BookCardProps) => {
  const { _id, title, price } = bookDetails;
  const navigate = useNavigate();
  const { removeBookFromList } = useBookContext();

  const handleRemoveBook = async () => {
    const success = await deleteBook(_id);

    if (success) {
      removeBookFromList(_id);
    }
  };

  return (
    <Grid item xs={12} sm={3} key={_id}>
      <Card sx={{ position: "relative" }}>
        <StyledIconButton onClick={handleRemoveBook}>
          <Delete />
        </StyledIconButton>
        <CardActionArea
          onClick={() => navigate(`/books/${_id}`, { state: bookDetails })}>
          <CardMedia
            component="img"
            image={bookPlaceholder}
            alt="book-placeholder"
          />
          <Stack direction="row" justifyContent="space-between" p={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h5">${price}</Typography>
          </Stack>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default BookCard;
