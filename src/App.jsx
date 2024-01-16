import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import About from "./components/pages/About/About";
import Profile from "./components/pages/Profile/Profile";
import BuildingPage from "./components/pages/BuildingPage/BuildingPage";
import ServiceCreate from "./components/pages/ServiceCreate/ServiceCreate";
import BuildingCreate from "./components/pages/BuildingCreate/BuildingCreate";
import Buildings from "./components/Buildings/Buildings";
import Header from "./components/layout/Header/Header";
import Todos from "./components/pages/Todos/Todos";
import TodoPage from "./components/pages/TodoPage/TodoPage";
import TodoCreate from "./components/pages/TodoCreate/TodoCreate";
import Incidences from "./components/pages/Incidences/Incidences";
import IncidencePage from "./components/pages/IncidencePage/IncidencePage";
import IncidenceCreate from "./components/pages/IncidenceCreate/IncidenceCreate";
import NotFound from "./components/pages/NotFound/NotFound";
import Service from "./components/pages/Service/Service";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import OwnerCreate from "./components/pages/OwnerCreate/OwnerCreate";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/registro" element={<Register />} />
          <Route path="/inicioSesion" element={<Login />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/fincas" element={<Buildings />} />
          <Route path="/fincas/id/:_id" element={<BuildingPage />} />
          <Route path="/fincas/crear" element={<BuildingCreate />} />
          <Route path="/tareas/" element={<Todos />} />
          <Route path="/tareas/id/:_id" element={<TodoPage />} />
          <Route path="/tareas/crear" element={<TodoCreate />} />
          <Route path="/incidencias/" element={<Incidences />} />
          <Route path="/incidencias/id/:_id" element={<IncidencePage />} />
          <Route path="/incidencias/crear" element={<IncidenceCreate />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios/crear" element={<ServiceCreate />} />
          <Route path="/servicios" element={<Service />} />
          <Route path="/servicios/id/:id" element={<ServicePage />} />
          <Route path="/propietarios/crear" element={<OwnerCreate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
