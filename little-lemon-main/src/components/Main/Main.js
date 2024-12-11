import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Reservations from "../Reservations/Reservations";
import Orders from "../Orders/Orders";
import Login from "../Login/Login";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
