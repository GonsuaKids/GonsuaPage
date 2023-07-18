import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import ReactPlayer from 'react-player'
import './CSS/Contacto.css'

export default function Contacto(){
    return(
        <>
            <Navbar/>
            <div className="contact--container">
                <div className="contact--info">
                    <p>Puedes utilizar los siguientes medios para ponerte en contacto con nuestra directora general:</p>
                    <p>María de la Esperanza Suárez Martínez</p>
                    <p>Telefono: 5554575611</p>
                    <p>Email: gonsuakids@gmail.com</p>
                    <p>¿Estás interesado en hacer un donativo?</p>
                    <p>Banco: BanBajío</p>
                    <p>Numero de cuenta: 383545510201</p>
                    <p>Cuenta clabe: 030180900033628423</p>
                    <p>RFC: SUME5910248N2</p>
                </div>
                <div className="img-container-cont">
                    <img src={require('../../assets/EventoGon2.jpeg')} alt="Imagen de un evento de nuestra fundación" className='event--img'/>
                </div>
            </div>
            <div className='react-player vid-container'>
                        <ReactPlayer
                            url='https://youtu.be/NpznMSFFwOc'
                            // playing: false
                            width='70%'
                            height='100%'
                        />
                    </div>
            <Footer/>
        </>
    )
}