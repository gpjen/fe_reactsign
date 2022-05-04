import NavbarTop from "./components/NavbarTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
