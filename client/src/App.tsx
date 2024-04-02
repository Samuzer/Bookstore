import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import themeConfig from "./config/theme";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import Main from "./pages/Main";
import BookDetails from "./pages/BookDetails";
import { BookProvider } from "./contexts/BookContext";

const theme = createTheme(themeConfig);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BookProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={() => <Navigate to="/books" />} />
              <Route path="/books" Component={Main} />
              <Route path="/books/:id" Component={BookDetails} />
              <Route path="*" Component={() => <Navigate to="/books" />} />
            </Routes>
          </BrowserRouter>
        </BookProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
