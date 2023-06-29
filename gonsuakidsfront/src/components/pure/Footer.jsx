import React from "react"
import './CSS/Footer.css'


export default function Footer() {
    return (
        <footer>
            <div className="footer--kayu">
                <h1 className='footer--title'>
                    <span style={{ color: "var(--azul)" }}>GON</span>
                    <span className="half-half">SUA</span>
                    {/* <span style={{color: "var(--naranja)"}}>sua</span> */}
                    <span style={{ color: "var(--rosa2)" }}>K</span>
                    <span style={{ color: "var(--verdeChillon)" }}>I</span>
                    <span style={{ color: "var(--naranja)" }}>D</span>
                    <span style={{ color: "var(--mor)" }}>S</span>
                </h1>
                <h2 className='footer--eslogan'>Eslogan de la fundación</h2>
            </div>
            <div className="footer--privacy flex_column">
                <h3>Información de contacto</h3>
                <h3>Aviso de privacidad</h3>
            </div>
        </footer>
    )
}