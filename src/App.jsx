import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Nackles from "./pages/Nackles";
import Home from "./pages/home";
import Repair from "./pages/repair";
import Work from "./pages/work";
import Example from "./pages/example";
import Request from "./pages/request";
import Contact from "./pages/contact";
import Jewellery from "./pages/JewelleryRepairs";
import Ring from "./pages/ring_size";
import chainrepair from "./pages/chain";
import ChainRepairs from "./pages/chain";
import Pendent from "./pages/pendantrepair";
import Bracelet from "./pages/bracelet";
import Earring from "./pages/earring";
import Catches from "./pages/catches";
import Rodhium from "./pages/rodhium";
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
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/ring_size" element={<Ring />} />
          <Route path="/chain" element={<ChainRepairs />} />
          <Route path="/pendant" element={<Pendent />} />
          <Route path="/bracelet" element={<Bracelet />} />
          <Route path="/earring" element={<Earring />} />
          <Route path="/catchess" element={<Catches />} />
          <Route path="/neckles" element={<Nackles />} />
          <Route path="/rodhium" element={<Rodhium />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;