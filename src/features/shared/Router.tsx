import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../home";
import { User } from "../user";
import Fallback from "./Fallback";

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  </BrowserRouter>
};

export default Router;
