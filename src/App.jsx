import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotpassword";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
