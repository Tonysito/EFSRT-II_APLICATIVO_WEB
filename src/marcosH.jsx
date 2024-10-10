import React from "react";
import { useNavigate } from "react-router-dom";
import infVendEmp from './infVendEmp.json'
import '../src/marcosH.css';
import '../src/mediaqueries.css'


const MainVender = () => {

    const navigate = useNavigate();

    const pressClick = () => {
        navigate('/Registro'); 
        //window.location.href = "/registro"; 
    };

    return(
        //VCN = Vende Con Nosotros
        <div>
            <section className="sec_banner_reg">
                <img className="img_banner_reg" src="../images/img_banner_reg.jpg"></img>
                <div>
                    <h3>UNETE A NUESTRO EQUIPO DE </h3>
                    <h3>EMPRENDEDORES EXITOSOS</h3>
                    <aside className="asid_banner_btn_reg">
                        <button onClick={pressClick}>Registrate</button>
                        <span>!Obten un envio gratis para tu primera venta!</span>
                    </aside>
                </div>
            </section>
            <aside className="asid_estadisticas">
                <p>Más del 70 % de los emprendedores de ComerciaPe consiguen su primera</p>
                <p>venta en menos de 60 días.</p>
            </aside>
            <section className="sec_empieza_ben">
                <div>
                    <img src="../images/img_empieza_ben.png"/>
                </div>
                <div className="div_empieza_ben">
                    <h3>Empieza con beneficios por ser de los primeros</h3>
                    <p>¿Todo listo para vender en ComerciaPe? Como vendedor nuevo, puedes obtener mas beneficios.</p>
                    <div>
                        {infVendEmp.d_ben.map((beneficio,i) => (
                            <p key={i}>{beneficio}</p>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <h3>UNETE A NUESTRO EQUIPO</h3>
            </section>
            <aside className="asid_estadisticas">
                <div className="div_estadisticas">
                    {infVendEmp.d_est.map((estadistica,i) => (
                        <div key={i}>
                            <h4>{estadistica.titulo}</h4>
                            <p>{estadistica.descripcion}</p>
                        </div>
                    ))}
                </div>
            </aside>
            <section>
                 <h3>UNETE A NUESTRO EQUIPO</h3>
            </section>
        </div>
    );
}

export default MainVender;