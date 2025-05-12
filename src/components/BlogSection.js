import React from "react";

const blogPosts = [
  {
    date: "Sept 22, 2024",
    title: "💻 RTX 3060 12GB for Local Stable DIffusion (AI Image generation)",
    link: "https://akaditasustono.blogspot.com/2024/09/rtx-3060-12gb-for-local-stable.html",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r9-ovKfLpDlrhtSNxAkUfkaVTwIcoLnCvw&s",
  },
  {
    date: "Apr 13, 2024",
    title: "🧪 Jest Unit Test Loves CPU Core So Much ",
    link: "https://akaditasustono.blogspot.com/2024/04/jest-unit-test-loves-cpu-core-so-much.html",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhGVQEGTeVo1NzwJ_Bc8se0foed2p9RXcZaAhrv2M2i2O-xJQv0WjAJ_OugkhebyvTN55FCxTt3M6655fs2vOgN0OlF20vqiedZcv3do4C9XwpvOgwM0Tv5e3IO68j1pRtrnfOQJuxmgha8OwpysWFTMzE6slD8dXiz4hg20u4XRub7WbDMMG5K-26LYhM=w587-h640",
  },
  {
    date: "Feb 11, 2023",
    title: "⌨️ An Honest Review Of Keychron K3 Optical Keyboard",
    link: "https://akaditasustono.blogspot.com/2023/02/an-honest-review-of-keychron-k3-optical.html",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRlcyNv3TkqfXKmd1IZyL72PjMjv4n_Dd5gCv0I1u5Y3z1rhaBrkebnxszA38sTe3I2KzPPvXfZFojpQsSVKuRG1D-wduKzxIeBQSsXKPZNyI_TaxWXMUtii_miufcHyWxeqfPZETUOfuSLMnffKEATziaBMb5GDepd_gZIt-fgA4j9mRPGT9TFo-c/w480-h640/20230211_225810.jpg",
  },
  {
    date: "Okt 23, 2021",
    title: "🗾 Load KML File To Your React Native Maps ",
    link: "https://akaditasustono.blogspot.com/2021/10/load-kml-file-to-your-react-native-maps.html",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEjKpn7n6FORiOD3RemYc-ognhT07kqSSathlQNIw1bNtkQl2_vH589AJY_4X7BaOv3ppNlWbUMZSHlM1DeZpCjKp5Z3vZIND297H4nMiqGTwCoqnCNO1rtXAHysxFwCOt9XgPw2jElEaTX3zCGnMQ7GktkDfYur1A0RxNyjmCJVzzYPItoNn2bXqRcS=s16000",
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
            <div className="blog-row">
              <img src={post.image} alt={`Blog post ${idx + 1}`} />
              <div>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
