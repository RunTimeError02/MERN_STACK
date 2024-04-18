// BlogList.jsx
import React from "react";
import BlogCard from "./BlogCard"; // Make sure the path matches your file structure

const blogPosts = [
  {
    id: 1,
    imageUrl: "/images/recipe-1.jpg",
    date: "1 Oct, 2023",
    title: "A beautiful sunday morning renaissance",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque voluptates eum...",
  },
  {
    id: 2,
    imageUrl: "/images/recipe-2.jpg",
    date: "15 Oct, 2023",
    title: "Exploring the depths of culinary arts",
    description: "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna...",
  },
  // Add more blog posts as necessary
];

const BlogList = () => {
  return (
    <div>
      {blogPosts.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
