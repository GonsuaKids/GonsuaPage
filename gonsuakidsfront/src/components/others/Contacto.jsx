import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import './CSS/Contacto.css'

export default function Contacto(){
    return(
        <>
            <Navbar/>
            <p>Ponte en contacto con nosotros a través de los siguientes medios:</p>
            <p>Ponte en contacto con nosotros a través de los siguientes medios:</p>
            <p>Ponte en contacto con nosotros a través de los siguientes medios:</p>
            <div className="img-container-cont">
                <img src={require('../../assets/EventoGon2.jpeg')} alt="Imagen de un evento de nuestra fundación" className='event--img'/>
            </div>
            <Footer/>
        </>
    )
}