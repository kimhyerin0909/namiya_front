import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/login/Login";
import { Main } from "./pages/main/Main";
import { SignUp } from "./pages/auth/signup/SignUp";
import { Stars } from "./components/shared/stars/Stars";
import { AuthRequired } from "./components/shared/authRequired/AuthRequired";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<AuthRequired children={<Main />} />} />
      </Routes>
      <Stars />
    </BrowserRouter>
  );
};
export default App;
