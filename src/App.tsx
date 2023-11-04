import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Link } from "react-router-dom"

function App() {
  return (
    <>
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Post Link</Link>
      </li>
      <li>
        <Link to="/posts/:id">Post Detail</Link>
      </li>
      <li>
        <Link to="/posts/new">Post New</Link>
      </li>
      <li>
        <Link to="/posts/edit/:id">Post New</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </div>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/posts" element={<h1>Post List Page</h1>} />
      <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
      <Route path="/posts/new" element={<h1>Post New Page</h1>} />
      <Route path="/posts/edit/:id" element={<h1>Post New Page</h1>} />
      <Route path="/profile" element={<h1>Profile Page</h1>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    </>
  );
}

export default App;
