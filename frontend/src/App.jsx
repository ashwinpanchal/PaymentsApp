import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Appbar } from "./components/Appbar";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Appbar />
          <Routes>
            <Route path="/" element={<Signup />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
