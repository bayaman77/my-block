import React from "react";
import BlogEntries from "./components/blogEntries/BlogEntries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css"
import ReadMore from "./pages/ReadMore/ReadMore";


const App = () => {
  return (
    <>
      {/* <div className="w3-content" style={{ maxWidth: "1400px" }}>
        <Header />
        <div className="w3-row">
          <BlogEntries />
          <Sidebar />
        </div>
      </div>
      <Footer /> */}
      <ReadMore />
    </>
  );
};

export default App;
