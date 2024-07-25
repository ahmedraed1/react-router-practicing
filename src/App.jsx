import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./view/about";
import Header from "./components/header";
import Home from "./view/home";
import NotFoundPage from "./view/notFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
