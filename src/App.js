import "./Style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Navbar/Header";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
