import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/pure/Landing';
import Contacto from './components/others/Contacto';
import AboutUs from './components/others/AboutUs';
import Team from './components/others/Team';

export default function App() {

  return (
    <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/Contacto" element = {<Contacto />} />
        <Route path = "/GonsuaKids" element = {<AboutUs />} />
        <Route path = "/Team" element = {<Team />} />
      </Routes>
  );
}
