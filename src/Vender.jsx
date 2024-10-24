import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import infVendEmp from './infVendEmp.json';
import '../src/Vender.css';
import '../src/mediaqueries.css';
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const MainVender = () => {
    const [usuarioNombre, setUsuarioNombre] = useState(null);
    const [indexActive, setIndexActive] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const nombreGuardado = localStorage.getItem('usuarioNombre');
        if (nombreGuardado) {
            setUsuarioNombre(nombreGuardado);
        }
    }, []);

    const pressClickReg = () => {
        navigate('/Registro'); 
    };

    const pressClickMasInfo = (i) => {
        setIndexActive(indexActive === i ? null : i);
    }

    return (
        <div>
            {/* Section 1 - Banner */}
            <section className="sec_banner_reg">
                <img className="img_banner_reg" src="../images/img_banner_reg.jpg" alt="Banner de registro" />
                <div>
                    <h3>UNETE A NUESTRO EQUIPO DE</h3>
                    <h3>EMPRENDEDORES EXITOSOS</h3>
                    <aside className="asid_banner_btn_reg">
                        {usuarioNombre ? (
                            <button disabled>Hola, {usuarioNombre}</button>
                        ) : (
                            <button onClick={pressClickReg}>Regístrate</button>
                        )}
                        <span>¡Obtén un envío gratis para tu primera venta!</span>
                    </aside>
                </div>
            </section>

            {/* Section 2 - Estadísticas */}
            <aside className="asid_estadisticas">
                <p>Más del 70 % de los emprendedores de Comercia.pe consiguen su primera</p>
                <p>venta en menos de 60 días.</p>
            </aside>

            {/* Section 3 - Beneficios */}
            <section className="sec_empieza_ben">
                <div>
                    <img src="../images/img_empieza_ben.png" alt="Inicio con beneficios" />
                </div>
                <div className="div_empieza_ben">
                    <h3>Empieza con beneficios por ser de los primeros</h3>
                    <p>¿Todo listo para vender en Comercia.pe? Como vendedor nuevo, puedes obtener más beneficios.</p>
                    <div>
                        {infVendEmp.d_ben.map((beneficio, i) => (
                            <p key={i}><strong>{beneficio.ben_resal}</strong> {beneficio.descripcion}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4 - Puntos y Reseñas */}
            <section className="sec_puntos_resenias">
                <div className="div_puntos">
                    <h3>¿Por qué crear una cuenta de vendedor de Comercia.pe?</h3>
                    <p>Hay un sinfín de motivos para vender en Comercia.pe. Estos son solo algunos.</p>
                    {infVendEmp.d_punt.map((puntos, i) => (
                        <div key={i}>
                            <img src={puntos.icon} alt={puntos.titulo} />
                            <aside className="asid_puntos">
                                <h4>{puntos.titulo}</h4>
                                <p>{puntos.descripcion}</p>
                                <button onClick={() => pressClickMasInfo(i)}><strong>{puntos.masInfo}</strong></button>
                            </aside>
                        </div>
                    ))}
                </div>
                <div className="div_resenias">
                    {infVendEmp.d_res.map((resenia, i) => (
                        <div key={i}>
                            <img src={resenia.companiaLogo} alt={`Logo de ${resenia.nombreEmp}`} />
                            <blockquote>{resenia.descripcion}</blockquote>
                            <aside className="asid_resenias">
                                <img src={resenia.portraitEmp} alt={`Retrato de ${resenia.nombreEmp}`} />
                                <span>
                                    <h4>{resenia.nombreEmp}</h4>
                                    <p>{resenia.cargoEmp}</p>
                                </span>
                            </aside>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5 - Estadísticas adicionales */}
            <aside className="asid_estadisticas">
                <div className="div_estadisticas">
                    {infVendEmp.d_est.map((estadistica, i) => (
                        <div key={i}>
                            <h4>{estadistica.titulo}</h4>
                            <p>{estadistica.descripcion}</p>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Section 6 - Preguntas Frecuentes */}
            <section className="sec_preg_frec">
                <h3>PREGUNTAS FRECUENTES</h3>
                <div>
                    {infVendEmp.d_preg_frec.map((frecuente, f) => (
                        <div key={f}>
                            <hr />
                            <aside className="asid_preg_frec">
                                <div>
                                    <h4>{frecuente.pregunta}</h4>
                                    <button className="button-simbolos" onClick={() => pressClickMasInfo(f)}>
                                        {indexActive === f ? <FaMinusSquare/> : <FaPlusSquare/>}
                                    </button>
                                </div>
                                <div className={`div_respuesta ${indexActive === f ? 'active' : ''}`}>
                                    {frecuente.respuesta.map((respuesta, r) => (
                                        <div key={r}>
                                            {typeof respuesta === "string" ? (
                                                <p>{respuesta}</p>
                                            ) : (
                                                <>
                                                    {f === 2 ? (
                                                        <ol>
                                                            {respuesta.map((informacion, i) => (
                                                                <li key={i}>{informacion.dato}</li> 
                                                            ))}
                                                        </ol>
                                                    ) : (
                                                        <ul>
                                                            {respuesta.map((informacion, i) => (
                                                                <li key={i}>{informacion.dato}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </>
                                            )}
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            </aside>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default MainVender;
