import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SchoolDetails from "./pages/SchoolDetails";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar common for both routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schools/:id" element={<SchoolDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



