import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/pure/Landing';
import Contacto from './components/others/Contacto';
import AboutUs from './components/others/AboutUs';
import Team from './components/others/Team';

export default function App() {

  return (
    <Routes>
        <Route path = "/GonsuaPage/" element = {<Landing />} />
        <Route path = "/" element = {<Landing />} />
        <Route path = "/GonsuaPage/Contacto" element = {<Contacto />} />
        <Route path = "/GonsuaPage/GonsuaKids" element = {<AboutUs />} />
        <Route path = "/GonsuaPage/Team" element = {<Team />} />
      </Routes>
  );
}
