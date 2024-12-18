import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import {
  HomePage,
  CreateOrderPage,
  ViewOrdersPage,
  LoginPage,
  RegisterPage,
} from "./pages/";
import { DashboardPage } from "./pages/vendor/home/DashboardPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />

        <Route element={<LoginPage />} path="/auth/login" />
        <Route element={<RegisterPage />} path="/auth/register" />

        <Route element={<HomePage />} path="/vendor">
          <Route element={<DashboardPage />} path="/vendor" />

          <Route element={<CreateOrderPage />} path="/vendor/orders" />
          <Route element={<ViewOrdersPage />} path="/vendor/view-orders" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
