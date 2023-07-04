import React from "react"
import './CSS/Navbar.css'
import { useNavigate, Link } from "react-router-dom"

export default function Navbar(){
    const navigate=useNavigate();
    return(
    <div className="nav">
        <div className="logo">
            <div className="nav--title">
                <Link to="/">
                    <h4 className="logo-t">
                        <span style={{color: "var(--azul)"}}>GON</span>
                        <span className="half-half">SUA</span>
                        {/* <span style={{color: "var(--naranja)"}}>sua</span> */}
                        <span style={{color: "var(--rosa2)"}}>K</span>
                        <span style={{color: "var(--verdeChillon)"}}>I</span>
                        <span style={{color: "var(--naranja)"}}>D</span>
                        <span style={{color: "var(--mor)"}}>S</span>
                    </h4>
                </Link>
            </div>
        </div>
        <div className="other">
            <h4 className='nav--info'><Link to="/GonsuaKids" className="AU">¿Quiénes somos?</Link></h4>
            <h4 className='nav--login'><Link to="/Team" className="Met">Cambiando vidas</Link></h4>
            <h4 className='nav--register'> <Link to="/Contacto" className="Cont">Contáctanos</Link></h4>
        </div>
    </div>
    )
}