
import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        {}
        <h1>Blog</h1>
      </header>
      <aside>
        {}
        <h2>About the Blog</h2>
        <p>{blogData.about}</p>
      </aside>
      <main>
        {}
        <h2>Recent Posts</h2>
        <ul>
          {blogData.posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.preview}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;



