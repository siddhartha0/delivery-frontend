import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/auth";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<LoginPage />} path="/login" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
