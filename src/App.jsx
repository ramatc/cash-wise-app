import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import Login from './views/Login';
import Perfil from './views/Perfil';
import About from './views/About';
import Contact from './views/Contact';
import Register from './views/Register';
import Historial from './views/Historial';
import Categoria from './views/Categoria';
import Ingresos from './views/Ingresos';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import { Password } from './components/Password';
import './styles.css';
import Asesoramiento from './views/Asesoramiento';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home />}
        />
        <Route
          path="/login"
          exact
          element={<Login />}
        />
        <Route
          path="/perfil"
          exact
          element={<Perfil />}
        />
        <Route
          path="/historial"
          exact
          element={<Historial />}
        />
        <Route
          path="/categoria"
          exact
          element={<Categoria />}
        />
        <Route
          path="/registro"
          exact
          element={<Register />}
        />
        <Route
          path="/ingresos"
          exact
          element={<Ingresos />}
        />
        <Route
          path="/contacto"
          exact
          element={<Contact />}
        />
        <Route
          path="/nosotros"
          exact
          element={<About />}
        />
        <Route
          path="/olvidoContrasena"
          exact
          element={<Password />}
        />
        <Route
          path="/asesoramiento"
          exact
          element={<Asesoramiento />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
