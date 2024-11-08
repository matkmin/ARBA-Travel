import React from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ARBA Travel</h1>
        <PostList />
      </header>
    </div>
  );
}

export default App;
