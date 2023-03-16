import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './stiles/App.css';

import { LoginPage } from './components/LoginPage';
import { TestPage } from './components/TestPage'

function App() {

  const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginPage setToken={setToken} />
  // }

  return (
    <div>

      <div className="auth-column">
        Main page
      </div>

      <BrowserRouter>
        <Routes>

          <Route path="*" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
