import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import './CSS/Team.css'
import ReactPlayer from 'react-player'


export default function Team(){
    return(
        <>
            <Navbar/>
            
            <div className="container">
                <div className="img-container">
                    <p className="text-team">
                        Empleamos una metodología abierta que nos permite dar seguimiento semi-escolarizado, las
                        actividades son diseñadas y dirigidas por especialistas de la educación y con el
                        apoyo de una sombra se ponen en práctica con los niños. El trabajo se realiza
                        diariamente con una gradualidad, esto con la finalidad de obtener un avance en los
                        niños y por ende, integrarlos a la vida cotidiana.
                    </p>
                    <img src={require('../../assets/EventoGon2.jpeg')} alt="Imagen de un evento de nuestra fundación" className='event--img'/>
                </div>
                <p className="text-team">
                    Los especialistas se dirigirán a las sombras para explicarles la forma, técnicas,
                    materiales a utilizar y en que se deberá apoyar a los menores para estimularlos en
                    las actividades.<br/>De esta forma es que canalizaremos a los menores que así lo requieran a:
                    <br/>
                    <br/>
                    <ul>
                        <li className="le-team">JUDICATURA SANITARIA DE AZCAPOTZALCO</li>
                        <li className="le-team">SISAME (CLINICA DE TRANSTORNO DEL ESPECTRO AUTISTA)</li>
                        <li className="le-team">CENTRO INTEGRAL DE SALUD MENTAL</li>
                        <li className="le-team">CRIT ARAGON</li>
                    </ul>
                    <br/>
                    En donde un equipo médico especializado será el responsable de vigilar la salud y
                    bienestar de todos los niños y niñas, para ello se solicitarán con consultorios
                    médicos especializados, con laboratorios clínicos, consultorios dentales y con
                    terapeutas que favorecerán el desarrollo integral.
                    <br/>
                    Se favorecerá la estimulación de las artes manuales en los niños y para ellos se
                    gestionará su ingreso a programas federales como natación, danza, pintura,
                    modelado, etc.
                </p>
                <div className="vid-container">
                    <div className='react-player'>
                        <ReactPlayer
                            url='https://youtube.com/shorts/7sMBGiLOjyI'
                            // playing: false
                            width='70%'
                            height='100%'
                        />
                    </div>
                    
                    <div className='react-player'>
                        <ReactPlayer
                            url='https://youtube.com/shorts/UDbadOz0ukg'
                            // playing: false
                            width='70%'
                            height='100%'
                        />
                    </div>

                    <div className='react-player'>
                        <ReactPlayer
                            url='https://youtube.com/shorts/AijDELH5OVA'
                            // playing: false
                            width='70%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}