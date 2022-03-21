import React from "react";
import BlogEntries from "./components/blogEntries/BlogEntries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css"

const App = () => {
  return (
    <>
      <div className="w3-content" style={{ maxWidth: "1400px" }}>
        <Header />
        <div className="w3-row">
          <BlogEntries />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
