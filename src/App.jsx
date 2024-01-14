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
import Service from "./components/pages/Services/Service";
import BuildingCreate from "./components/pages/BuildingCreate/BuildingCreate";
import Buildings from "./components/Buildings/Buildings";
import Header from "./components/layout/Header/Header";
import Todos from "./components/pages/Todos/Todos";
import TodoPage from "./components/pages/TodoPage/TodoPage";
import TodoCreate from "./components/pages/TodoCreate/TodoCreate";
import Incidences from "./components/pages/Incidences/Incidences";
import IncidencePage from "./components/pages/IncidencePage/IncidencePage";
import IncidenceCreate from "./components/pages/IncidenceCreate/IncidenceCreate";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        {/* <main> */}
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buildings/" element={<Buildings />} />
          <Route path="/buildings/id/:_id" element={<BuildingPage />} />
          <Route path="/buildings/create" element={<BuildingCreate />} />
          <Route path="/todos/" element={<Todos />} />
          <Route path="/todos/id/:_id" element={<TodoPage />} />
          <Route path="/todos/create" element={<TodoCreate />} />
          <Route path="/incidences/" element={<Incidences />} />
          <Route path="/incidences/id/:_id" element={<IncidencePage />} />
          <Route path="/incidences/create" element={<IncidenceCreate />} />
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
