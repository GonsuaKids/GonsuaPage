import Nav from './Navbar';
import Footer from './Footer';
// import { Card } from 'react'
import './CSS/Landing.css'
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default function Landing(){

    return(
        <>
            <Nav />
            <section className='landing--initial'>
                <div className='landing--upperInfo'>
                    <h1 className='landing--title'>
                        <span style={{color: "var(--azul)"}}>GON</span>
                        <span className="half-half">SUA</span>
                        {/* <span style={{color: "var(--naranja)"}}>sua</span> */}
                        <span style={{color: "var(--rosa2)"}}>K</span>
                        <span style={{color: "var(--verdeChillon)"}}>I</span>
                        <span style={{color: "var(--naranja)"}}>D</span>
                        <span style={{color: "var(--mor)"}}>S</span>
                    </h1>
                    <div className='landing--fColumn'>
                        <div className="landing--info">
                            <p>GonsuaKids es una fundación enfocada en ayudar y apoyar a través de la colabaración con espcialistas, a niños con discapacidad para adquirir y desarrollar habilidades para la vida, con la finalidad de que así, con nuestra ayuda y apoyo, puedan mejorar su salud</p>
                            <p className='bold contactanos'>¡Ponte en contacto con nosotros y únetenos en esta causa!</p>
                        </div>
                        <img src={require('../../assets/GonsuaKids.png')} alt="Imagen insignia de GonsuaKids" className='landing--img'/>
                    </div>
                </div>
            </section>
            <section className='landing--recomended'>
                <h3 className='landing--recomended-title'>
                    Nuestra fundadora explica de primera mano el objetivo de la fundación:
                </h3>
            </section>
            <div className='react-player'>
                <ReactPlayer
                    url='https://youtu.be/v3EZN_n-dZU'                    
                    // playing: false
                    width='55%'
                    height='100%'
                />
            </div>
            <Footer/>
        </>
    )

}