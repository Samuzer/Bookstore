import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";
import { getAllBooks } from "../apis/bookApis";
import { Book } from "../interfaces/book.interfaces";

interface BookContextType {
  books: Book[];
  loading: boolean;
  addBookToList: (book: Book) => void;
  removeBookFromList: (id: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const addBookToList = (book: Book) => {
    setBooks(prev => [...prev, book]);
  };

  const removeBookFromList = (id: string) => {
    setBooks(prev => prev.filter(book => book._id !== id));
  };

  const contextValue: BookContextType = {
    books,
    loading,
    addBookToList,
    removeBookFromList
  };

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
