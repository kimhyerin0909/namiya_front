import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login/Login";
import { Main } from "./pages/main/Main";
import { SignUp } from "./pages/auth/signup/SignUp";
import { Stars } from "./components/shared/stars/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Stars />
    </BrowserRouter>
  );
};
export default App;
