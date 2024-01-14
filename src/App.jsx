import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/layout/Header/Header'
// import Footer from './components/layout/Footer/Footer'
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import About from "./components/pages/About/About";
import Profile from "./components/pages/Profile/Profile";
import BuildingPage from "./components/pages/BuildingPage/BuildingPage";
import Preloader from "./components/pages/Preloader/Preloader";
import Service from "./components/pages/Services/Service";
import BuildingCreate from "./components/pages/BuildingCreate/BuildingCreate";
import Buildings from "./components/Buildings/Buildings";
import Header from "./components/layout/Header/Header";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <main> */}
        <Routes>
          <Route path="/" element={<Preloader />} />
          <Route path="/home" element={<><Header /><Home /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buildings/" element={<Buildings />} />
          <Route path="/buildings/id/:_id" element={<BuildingPage />} />
          <Route path="/buildings/create" element={<BuildingCreate />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        {/* </main> */}
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
