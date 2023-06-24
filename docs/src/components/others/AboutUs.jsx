import Footer from "../pure/Footer";
import Navbar from "../pure/Navbar";
import './CSS/AboutUs.css'


export default function AboutUs(){
    return(
        <>
            <Navbar />
            <div className="Container">
                <div className="secc">
                    <h2>
                        Objetivos
                    </h2>
                    <ol>
                        <li>
                        Brindar a las familias herramientas y opciones de salud especializadas mediante consultorios médicos, laboratorios clínicos, consultorios dentales y distintas terapias que permitan contribuir al cuidado de la salud y en consecuencia una mejor integración a distintas actividades que favorezcan su desarrollo.
                        </li>
                        <li>
                        Lograr que las niñas y niños con autismo, asperger o síndrome de down, logren tener mayor independencia e integración a la cotidianeidad de nuestra sociedad.
                        </li>
                        <li>
                        Solicitaremos a las autoridades correspondientes nos brinden todo el apoyo para tener acceso a los distintos programas sociales, así como la apertura para ocupar los espacios recreativos y culturales para complementar las actividades y poder lograr un mayor éxito.
                        </li>
                    </ol>
                </div>
                <hr/>
                <div className="secc">
                    <h2>
                        Misión
                    </h2>
                    <p className="AU-text">Integrar una comunidad empática y unificada, en la cual podamos apoyar a este
                        sector de nuestra población, el cual cuenta áreas de oportunidad limitadas,
                        queremos brindarles una opción especializada que les permita afrontar su día a día
                        de una mejor manera y con la mayor calidad de vida posible.
                    </p>
                </div>
                <hr/>
                <div className="secc">
                    <h2>
                        Visión
                    </h2>
                    <p className="AU-text">
                        Somos una institución que pretendemos ayudar y brindar una alternativa a niños y
                        niñas que presentan el ESPECTRO AUTISTA, ASPERGER Y SÍNDROME DE
                        DOWN, para que en un ambiente de corresponsabilidad y compromiso nos
                        dediquemos a la formación integral de niños y niñas, siendo nuestra principal labor
                        “LA INCLUSION A LA VIDA COTIDIANA Y FAMILIAR”.
                    </p>
                </div>
                <hr/>
                <div className="secc">
                    <h2>
                        Valores
                    </h2>
                    <div className="List--valores">
                        <ul>
                            <li>Amor</li>
                            <li>Respeto</li>
                            <li>Inclusión</li>
                            <li>Comprensión</li>
                            <li>Empatía</li>
                        </ul>
                        <ul>
                            <li>Tolerancia</li>
                            <li>Aceptación</li>
                            <li>Integración</li>
                            <li>Seguridad</li>
                            <li>Diversidad</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}