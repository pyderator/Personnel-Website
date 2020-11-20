import React, { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import MyServices from "./Components/MyServices";
import BlogPosts from "./Components/BlogPosts";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
function App() {
  useEffect(() => {
    document.getElementById("root")!.style.display = "none";
    setTimeout(
      ((document.getElementById("loader")!.style.display = "none"),
      (document.getElementById("root")!.style.display = "block")),
      21000,
    );
  }, []);
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutMe />
      <MyServices />
      <BlogPosts />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
