import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";



function App() {
  const dataBlog = blogData;
  console.log(dataBlog);
  // const blogName = "Overreacted";
  // const blogText = "Welcome to my Blog!"
  // const posts = [
  //   { id: 1, title: "When I was born", date: "November 3, 1986", preview: "I was born in Araras, SP on a Monday."},
  //   { id: 2, title: "Traveling the World", date: "September 14, 2014", preview: "When I started my flight attendant career."}
  // ];

  return (
    <div className="App">
      <Header name={dataBlog.name}/>
      <About about={blogData.about} image={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;

