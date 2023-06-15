import React from "react"
import './CSS/Navbar.css'
import { useNavigate, Link } from "react-router-dom"

export default function Navbar(){
    const  navigate=useNavigate();
    return(
    <nav className="nav">
        <Link className='nav--title' to="/">GonsuaKids</Link>
        <h2 className='nav--info'><Link to="/GonsuaKids" className="AU">¿Quiénes somos?</Link></h2>
        <h2 className='nav--login' onClick={() => {navigate('/Team')}}>Nuestra forma de ayudar</h2>
        <h2 className='nav--register' onClick={() => {navigate('/Contacto')}}>Contáctanos</h2>
    </nav>
    )
}