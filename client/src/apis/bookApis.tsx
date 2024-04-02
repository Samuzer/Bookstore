import axios from "../axiosInstance";
import { Book } from "../interfaces/book.interfaces";

const BASE_URL = "/books";

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await axios.get<Book[]>(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const createBook = async (
  bookData: Omit<Book, "_id">
): Promise<Book | null> => {
  try {
    const response = await axios.post<Book>(`${BASE_URL}`, bookData);
    return response.data;
  } catch (error) {
    console.error("Error creating book:", error);
    return null;
  }
};

export const deleteBook = async (id: string): Promise<boolean> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting book:", error);
    return false;
  }
};
