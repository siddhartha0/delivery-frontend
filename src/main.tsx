import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/auth";
import App from "./App.tsx";
import "./index.css";
import { HomePage } from "./pages/home/HomePage.tsx";
import { CreateOrderPage } from "./pages/orders/CreateOrdersPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />

        <Route element={<LoginPage />} path="/login" />
        <Route element={<HomePage />} path="/vendor">
          <Route element={<CreateOrderPage />} path="/vendor/orders" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
