import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Appbar } from "./components/Appbar";
import { Dashboard } from "./components/Dashboard";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import { signedInAtom } from "./store/atoms/Atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </>
  );
}

function Main() {
  const setSignedIn = useSetRecoilState(signedInAtom);
  useEffect(() => {
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    axios
      .get("http://localhost:3000/api/v1/user/me", { headers: headers })
      .then((value) => {
        console.log(value.data);
        setSignedIn(true);
      })
      .catch((err) => {
        console.log(err.response.data);
        setSignedIn(false);
      });
  }, []);
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
