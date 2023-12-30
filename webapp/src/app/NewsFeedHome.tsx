"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const NewsFeedHome = () => {
  const [headlines, setHeadlines] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const url = "https://newsfeed-service.onrender.com/headlines/today";
        const response = await axios.get(url);
        setHeadlines(response.data.headlines);
      } catch (error) {
        throw new Error(
          "Error fetching headlines: Please check your internet connection or try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <h2 className="text-center">
          <Loader />
        </h2>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4 text-center">
            Top 30 Headlines
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {headlines.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-200 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:underline font-medium"
                >
                  {item.headline}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NewsFeedHome;
