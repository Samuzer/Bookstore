import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { createBook } from "../../apis/bookApis";
import { Book } from "../../interfaces/book.interfaces";
import { LoadingButton } from "@mui/lab";
import { useBookContext } from "../../contexts/BookContext";

const genreOptions = [
  "Science fiction",
  "Satire",
  "Drama",
  "Action",
  "Romance",
  "Mystery",
  "Horror"
] as const;

interface AddBookModalProps {
  open: boolean;
  onClose: () => void;
}

const AddBookModal = ({ open, onClose }: AddBookModalProps) => {
  const { addBookToList } = useBookContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries()) as unknown;
    setIsLoading(true);

    const newBook = await createBook(formJson as Book);

    if (newBook) {
      addBookToList(newBook);
      onClose();
    }

    setIsLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: onSubmit
      }}>
      <DialogTitle>Add book</DialogTitle>
      <DialogContent>
        <TextField
          required
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          size="small"
        />
        <TextField
          required
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          size="small"
        />
        <TextField
          required
          margin="dense"
          name="author"
          label="Author"
          type="text"
          fullWidth
          variant="outlined"
          size="small"
        />
        <DatePicker
          name="publicationDate"
          label="Publication Date"
          slotProps={{
            textField: {
              size: "small",
              required: true,
              margin: "dense"
            }
          }}
        />
        <TextField
          name="genre"
          select
          label="Genre"
          required
          fullWidth
          margin="dense"
          defaultValue="">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {genreOptions.map(genre => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          margin="dense"
          name="price"
          label="Price"
          type="number"
          fullWidth
          variant="outlined"
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <LoadingButton variant="contained" type="submit" loading={isLoading}>
          Add
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddBookModal;
