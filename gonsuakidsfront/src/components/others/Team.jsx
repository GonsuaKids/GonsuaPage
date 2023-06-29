import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import './CSS/Team.css'


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
                    <img src={require('../../assets/EventoGon.jpeg')} alt="Imagen de un evento de nuestra fundación" className='event--img'/>
                </div>
                <p>
                    Los especialistas se dirigirán a las sombras para explicarles la forma, técnicas,
                    materiales a utilizar y en que se deberá apoyar a los menores para estimularlos en
                    las actividades.
                </p>
                <p>
                    La fundación canalizara a los menores que lo requieran a:
                    <ul>
                        <li>JUDICATURA SANITARIA DE AZCAPOTZALCO</li>
                        <li>SISAME (CLINICA DE TRANSTORNO DEL ESPECTRO AUTISTA)</li>
                        <li>CENTRO INTEGRAL DE SALUD MENTAL</li>
                        <li>CRIT ARAGON</li>
                    </ul>
                    En donde un equipo médico especializado será el responsable de vigilar la salud y
                    bienestar de todos los niños y niñas, para ello se solicitarán con consultorios
                    médicos especializados, con laboratorios clínicos, consultorios dentales y con
                    terapeutas que favorecerán el desarrollo integral.
                </p>
                <p>
                    Se favorecerá la estimulación de las artes manuales en los niños y para ellos se
                    gestionará su ingreso a programas federales como natación, danza, pintura,
                    modelado, etc.
                </p>
            </div>
            <Footer/>
        </>
    )
}