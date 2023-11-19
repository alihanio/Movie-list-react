import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin/Admin";
import UserPage from "./components/users/UserPage";
import MovieInfo from "./components/users/MovieInfo";
import MenuLayout from "./components/layout/MenuLayout";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MenuLayout />}>
          <Route path="user" element={<UserPage />} />
          <Route path="/" element={<Admin />} />
        </Route>
        <Route path="user/:id" element={<MovieInfo />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
