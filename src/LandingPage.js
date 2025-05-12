import React from "react";
import "./App.css";
import BlogSection from "./components/BlogSection";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="home">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            src="/logo512.jpg"
            alt="logo"
            style={{ borderRadius: "50%" }}
            width={120}
            height={120}
          />
          <div>
            <div className="home-greeting">
              Hi, Saya <span className="highlight">Prieyuda A.S</span>!{" "}
              <span className="wave">✋</span>
            </div>
            <div className="home-intro">
              Saya suka belajar hal baru dan problem solving melalui teknologi.
              <br></br>
              Sekarang sedang belajar{" "}
              <span className="highlight">
                <i>web development</i>
              </span>{" "}
              utamanya adalah{" "}
              <span className="highlight">
                <i>ReactJS/NextJS</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
      <section className="blog-section">
        <section className="tables-section">
          <h2>
            Bahasa yang dikuasai <span className="down-arrow">(Spoken)</span>
          </h2>

          <table className="custom-table">
            <thead>
              <tr>
                <th>Bahasa</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bahasa Indonesia</td>
                <td>Native</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Profesional</td>
              </tr>
              <tr>
                <td>日本語</td>
                <td>
                  Tahap belajar<span className="wave">⌛</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Bahasa Pemrograman</h2>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Bahasa</th>
                <th>Level pengalaman</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript/Typescript</td>
                <td>Advanced</td>
              </tr>
              <tr>
                <td>Java/Kotlin</td>
                <td>Pemula</td>
              </tr>
              <tr>
                <td>Golng</td>
                <td>Dasar</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
}
