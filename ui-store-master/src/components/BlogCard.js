import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/recipe-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Oct, 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            voluptates eum 
                        </p>
          <Link to="/blog/:id" className="button">
            READ MORE
          </Link>
        </div>
      </div>

  );
};

export default BlogCard;

/* // BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog.imageUrl} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">{blog.date}</p>
        <h5 className="title">{blog.title}</h5>
        <p className="desc">{blog.description}</p>
        <Link to={`/blog/${blog.id}`} className="button">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard; */
