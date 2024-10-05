import React from "react";
//Falta incluir el React Router al principal  para que esto 
//Funcione == import { useNavigate } from "react-router-dom";
//En caso sea una pagina unica
//const navigate = useNavigate();

const pressClick = () => {
    //navigate('/registro') en caso se use solo 1 pag
    window.location.href = "/registro"; 
};

const mainVender = () => {
    return(
        //VCN = Vende Con Nosotros
        <div>
            <section className="sec_banner_reg">
              <div>
                <h2>UNETE A NUESTRO EQUIPO</h2>
                <picture //No se si es necesario esto
                >
                    <img className="img_banner_VCN" src="../images/banner_VCN"></img>
                </picture>
                <div className="s_div_banner_btn_reg">
                    <button onClick={pressClick}>Registrase</button>
                    <spam>lorem ............</spam>
                </div>
              </div>
              <aside>
                <p></p>
                <p><strong></strong></p>
              </aside>
            </section>
            <section>
                <h3>UNETE A NUESTRO EQUIPO</h3>
            </section>
            <section>
                <h3>UNETE A NUESTRO EQUIPO</h3>
            </section>
            <aside>
                <div>

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </aside>
            <section>
                 <h3>UNETE A NUESTRO EQUIPO</h3>
            </section>
        </div>
    );
}

export default mainVender;