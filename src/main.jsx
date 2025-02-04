import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
      <Toaster/>
    </AuthProvider>
  </StrictMode>
);
