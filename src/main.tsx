import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HomePage, CreateOrderPage, ViewOrdersPage, LoginPage } from "./pages/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />

        <Route element={<LoginPage />} path="/login" />
        <Route element={<HomePage />} path="/vendor">
          <Route element={<CreateOrderPage />} path="/vendor/orders" />
          <Route element={<ViewOrdersPage />} path="/vendor/view-orders" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
