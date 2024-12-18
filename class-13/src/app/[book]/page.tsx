"use client";

import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const Page = ({ params }: any) => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching book details
  const fetchBookDetails = async () => {
    try {
      const bookApi = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12"
      );
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

      setBooks(bookItems); // Set the books to local state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  
  if (loading) {
    return <div><Loader/></div>;
  }

  const filteredBook = books.filter((book) => String(book.id) === String(params.book));


  const book = filteredBook[0];  

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Book Details</h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Book Image */}
          {book.image ? (
            <div className="w-full md:w-1/2 h-96 flex justify-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <div className="w-full md:w-1/2 h-96 flex justify-center items-center bg-gray-300 rounded-lg shadow-lg">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}

          {/* Book Details */}
          <div className="flex flex-col w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{book.title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Author(s):</strong> {book.authors}
            </p>
            <div className="flex-grow">
              <p className="text-gray-600">{book.description || "No description available."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
