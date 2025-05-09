import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./LandingPage";
import BlogPage from "./BlogPage";

/**
 * Prieyuda Akadita S
 * NIM: 240401010353
 * Prodi: PJJ Informatika
 * Kelas: IF 203
 * Mata Kuliah: Pemrograman Web
 * Dosen: Riad Sahara, S.SI., M.T.
 */

function App() {
  return (
    <Router>
      <div className="root-container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
