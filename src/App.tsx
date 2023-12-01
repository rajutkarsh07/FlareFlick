import "./App.css";
import { Routes, Route } from "react-router-dom";

import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";

import { Home } from "./_root/pages";
import Layout from "./_root/Layout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
