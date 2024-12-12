import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import Topup from "./pages/Topup";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="px-4 pt-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topup" element={<Topup />} />
        </Routes>
      </div>
    </div>
  );
}
