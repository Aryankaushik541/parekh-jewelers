import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import Repair from "./pages/repair";
import Work from "./pages/work";
import Example from "./pages/example";
import Request from "./pages/request";
import Contact from "./pages/contact";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/work" element={<Work />} />
          <Route path="/example" element={<Example />} />
          <Route path="/request" element={<Request />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;