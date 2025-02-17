import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import Signup from "./components/signup";
import ForgotPassword from "./components/forgotpassword";
import Home from "./components/home";
import Dashboard from "./dashboard/dashboard";
import ResetPassword from './components/resetpassword'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
