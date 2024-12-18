"use client";

import { useState, useEffect } from "react";
import BookCard from "@/app/components/Books";
import Loader from "./components/Loader";
import { useAtom } from "jotai";

const Page = () => {
  
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const fetchBookDetails = async () => {
    try {
      const bookApi = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12");
      const response = await bookApi.json();
      
      const bookItems = response.items.map((item: any, id: any) => {
        const book = item.volumeInfo;
        return {
          title: book?.title || "No Title",
          authors: book?.authors?.join(", ") || "No Author",
          description: book?.description || "No Description",
          image: book?.imageLinks?.thumbnail || "",
          id: id,
        };
      });
      
      
      setBooks(bookItems);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Book List</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book:any, index) => (
            <BookCard
              key={index}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              id={book.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
