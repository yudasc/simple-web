import React from "react";
import BlogSection from "./components/BlogSection";

const BlogPage = () => {
  return (
    <div className="landing-container">
      <div className="home-greeting">
        Beberapa bacaan yang pernah saya{" "}
        <span className="highlight">muat di blog saya</span>
      </div>
      <p>
        Sebagian besar artikel ini adalah artikel yang pernah saya tulis. Belum
        sempat untuk memuat artikel baru
      </p>
      <ul className="blogList">
        <li className="blogListItem">Pengalaman problem solving</li>
        <li className="blogListItem">Pandangan / opini pribadi</li>
      </ul>
      <BlogSection />
    </div>
  );
};

export default BlogPage;
