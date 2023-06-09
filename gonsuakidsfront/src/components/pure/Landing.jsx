import Nav from './Navbar';
import Footer from './Footer';
// import { Card } from 'react'
import './CSS/Landing.css'

export default function Landing(){

    return(
        <>
            <Nav />
            <section className='landing--initial'>
                <div className='landing--upperInfo'>
                    <div className='landing--fColumn'>
                        <h1 className='landing--title'>GonsuaKids</h1>
                        <div className="landing--info">
                            <p>GonsuaKids es una fundación enfocada en ayudar y apoyar a través de la colabaración con espcialistas, a niños con discapacidad para adquirir y desarrollar habilidades para la vida, con la finalidad de que así, con nuestra ayuda y apoyo, puedan mejorar su salud</p>
                            <p className='bold contactanos'>¡Ponte en contacto con nosotros y únetenos en esta causa!</p>
                        </div>
                    </div>
                    <img src={require('../../assets/GonsuaKids.png')} alt="Imagen insignia de GonsuaKids" className='landing--img'/>
                </div>
            </section>
            <section className='landing--recomended'>
                <h1 className='landing--recomended-title'>
                    Conoce los lugares que apoyarías haciendo una donación en esta fundación:
                </h1>
            </section>
            <section className='cards'>
                {/* <Card />
                <Card />
                <Card /> */}
            </section>
            <Footer/>
        </>
    )

}