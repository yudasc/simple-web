import React, { useEffect, useState } from "react";

// Hardcode dulu
const navLinks = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Email", url: "mailto:ydhnwb@gmail.com" },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <header className="site-header">
      <div className="site-title">Prieyuda A.S</div>
      <nav className="site-nav">
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.url} className="nav-link">
            {link.name}
          </a>
        ))}
        <button
          className={`dark-mode-switch${darkMode ? " active" : ""}`}
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
