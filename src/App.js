import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Layout />
        

        <Routes path="/" element={<Sidebar />}>
            <Route path="/my-react-app/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/contact/" element={<Contact />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
