import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import './CSS/Team.css'


export default function Team(){
    return(
        <>
            <Navbar/>
            
            <div className="container">
                <p>
                    Empleamos una metodología abierta y se da seguimiento semi-escolarizado, las
                    actividades serán diseñadas y dirigidas por especialistas de la educación y con el
                    apoyo de una sombra se podrán en práctica con los niños. El trabajo se realizará
                    diariamente con una gradualidad, esto con la finalidad de obtener un avance en los
                    niños, por ende, integrarlos a la vida cotidiana.
                </p>
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