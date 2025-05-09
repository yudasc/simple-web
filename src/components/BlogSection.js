import React from "react";

const blogPosts = [
  {
    date: "Sept 22, 2024",
    title: "💻 RTX 3060 12GB for Local Stable DIffusion (AI Image generation)",
    link: "https://akaditasustono.blogspot.com/2024/09/rtx-3060-12gb-for-local-stable.html",
  },
  {
    date: "Apr 13, 2024",
    title: "🧪 Jest Unit Test Loves CPU Core So Much ",
    link: "https://akaditasustono.blogspot.com/2024/04/jest-unit-test-loves-cpu-core-so-much.html",
  },
  {
    date: "Feb 11, 2023",
    title: "⌨️ An Honest Review Of Keychron K3 Optical Keyboard",
    link: "https://akaditasustono.blogspot.com/2023/02/an-honest-review-of-keychron-k3-optical.html",
  },
  {
    date: "Okt 23, 2021",
    title: "🗾 Load KML File To Your React Native Maps ",
    link: "https://akaditasustono.blogspot.com/2021/10/load-kml-file-to-your-react-native-maps.html",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2>
        Artikel <span className="down-arrow">👇🏼</span>
      </h2>
      <div className="blog-list">
        {blogPosts.map((post, idx) => (
          <div className="blog-post" key={idx}>
            <div className="blog-date">{post.date}</div>
            <div className="blog-title">{post.title}</div>
            <a
              className="blog-link"
              href={post.link}
              target="_blank"
              rel="noreferrer"
            >
              Read Post &raquo;{" "}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
