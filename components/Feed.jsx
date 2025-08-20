"use client";

import { useState, useEffect } from "react";
import QueCard from "./QueCard";

const QueCardList = ({ data, handleTagClick }) => (
  <div className="mt-16 prompt_layout">
    {data.length > 0 ? (
      data.map((post) => (
        <QueCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))
    ) : (
      <p className="text-gray-500 text-center">No results found 🚫</p>
    )}
  </div>
);

export default function Feed() {
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/que");
      if (!response.ok) throw new Error("Failed to fetch posts");

      const data = await response.json();
      setAllPosts(data);
    } catch (error) {
      setFetchError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Filtering logic
  const filterQues = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.que)
    );
  };

  // Handle search input
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    const value = e.target.value;
    setSearchText(value);

    setSearchTimeout(
      setTimeout(() => {
        setSearchedResults(filterQues(value));
      }, 400)
    );
  };

  // Handle tag click
  const handleTagClick = (tagName) => {
    setSearchText(tagName);
    setSearchedResults(filterQues(tagName));
  };

  // Clear search
  const clearSearch = () => {
    setSearchText("");
    setSearchedResults([]);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
        {searchText && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-gray-400 hover:text-black text-sm"
          >
            ✖
          </button>
        )}
      </form>

      {/* Loading & Error UI */}
      {loading ? (
        <p className="text-center mt-10">Loading posts ⏳...</p>
      ) : fetchError ? (
        <p className="text-center text-red-500 mt-10">⚠ {fetchError}</p>
      ) : searchText ? (
        <QueCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <QueCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
}
