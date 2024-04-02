import React from "react";
import { Stack, Typography } from "@mui/material";

interface BookDetailFieldProps {
  label: string;
  value: string;
}

const BookDetailField = ({ label, value }: BookDetailFieldProps) => {
  return (
    <Stack my={2}>
      <Typography variant="h5">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};

export default BookDetailField;
