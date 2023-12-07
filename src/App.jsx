import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {

  return (

      <Routes>
        <Route path="/" element={<Layout />} >

          <Route index element={<Home/>} />

          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>

  );
};

export default App;
