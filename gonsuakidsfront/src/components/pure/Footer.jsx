import React from "react"
import './CSS/Footer.css'


export default function Footer() {
    return (
        <footer>
            <div className="footer--kayu">
                <h4 className='footer--title'>
                    <span style={{ color: "var(--azul)" }}>GON</span>
                    <span className="half-half">SUA</span>
                    {/* <span style={{color: "var(--naranja)"}}>sua</span> */}
                    <span style={{ color: "var(--rosa2)" }}>K</span>
                    <span style={{ color: "var(--verdeChillon)" }}>I</span>
                    <span style={{ color: "var(--naranja)" }}>D</span>
                    <span style={{ color: "var(--mor)" }}>S</span>
                </h4>
                <h4 className='footer--eslogan'>Eslogan de la fundación</h4>
            </div>
            <div className="footer--privacy flex_column">
                <h4>Información de contacto</h4>
                <h4>Aviso de privacidad</h4>
            </div>
        </footer>
    )
}