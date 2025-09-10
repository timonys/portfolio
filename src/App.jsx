import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioLanding from "./PortfolioLanding";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLanding />} />
      <Route path="/project/:title" element={<ProjectPage />} />
    </Routes>
  );
}