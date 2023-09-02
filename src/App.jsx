import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hub from "./pages/Hub";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/style.css";
import "./pages/Test.css";

function App() {
  try {
    return (
      <>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={<Login toast={toast} />} />
            <Route path="/register" exact element={<Register toast={toast} />} />
            <Route path="/*" exact element={<Hub toast={toast} />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default App;
