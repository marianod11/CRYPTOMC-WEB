import foto1 from "../images/Team/Team-1.png"
import foto2 from "../images/Team/Team-2.png"
import foto3 from "../images/Team/Team-3.png"
import foto4 from "../images/Team/Team-4.png"
import foto5 from "../images/Team/Team-5.png"
import foto6 from "../images/Team/Team-6.png"
import foto7 from "../images/Team/Team-7.png"
import foto8 from "../images/Team/Team-8.png"
import foto9 from "../images/Team/Team-9.png"
import moztasa from "../images/botellacheddar.png"


export default function Team() {
    return (
        <section className="Team" id="Team">
            <img id="mustard-1" src={moztasa} alt="" />
            <img id="mustard-2" src={moztasa} alt="" />
            <div className="container">
                <div>
                     <h1>TEAM <br/> DEVELOPMENT </h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <h3>DEVELOPER</h3>
                        <img src={foto1} class="rounded mx-auto d-block" alt="" />
                        <p>KEVIN CASTROVERDE <br/>
                        <a href="https://www.linkedin.com/in/kevin-castroverde/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/kef_webdev/" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>DEVELOPER</h3>
                        <img src={foto2} class="rounded mx-auto d-block" alt="" />
                        <p>MARIANO DELL AQUILA <br/>
                        <a href="https://www.linkedin.com/in/mariano-dell-aquila-b904011b5" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a> 

                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>DEVELOPER</h3>
                        <img src={foto3} class="rounded mx-auto d-block" alt="" />
                        <p>CARLOS FABIAN LENCINA<br/>
                        <a href="https://www.linkedin.com/in/carloslencinaok" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a> 
                        <a href="https://Instagram.com/fabianbenshaddai/" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        </p>

                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>MARKETING</h3>
                        <img src={foto4} class="rounded mx-auto d-block" alt="" />
                        <p>JUAN IGNACIO ALLIANA OSTENEROS<br/>
                        <a href="https://instagram.com/juan_osteneros" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/juanosteneros" rel="noreferrer" target="_blank">
                        <i class="fab fa-twitter"></i></a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>MARKETING</h3>
                        <img src={foto5} class="rounded mx-auto d-block" alt="" />
                        <p>TOMAS COPORNIO <br/>
                        <a href="https://instagram.com/tomycapornio" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/ballet_cosmico?s=21" rel="noreferrer" target="_blank">
                        <i class="fab fa-twitter"></i></a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>DESIGNER</h3>
                        <img src={foto6} class="rounded mx-auto d-block"  alt="" />
                        <p>SANTIAGO DE JESUS VILLANUEVA ACUÑA <br/> 
                        <a href="https://www.facebook.com/santiago.acuna.16" rel="noreferrer" target="_blank">
                        <i class="fab fa-facebook-square"></i></a> 
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>DESIGNER</h3>
                        <img src={foto9} class="rounded mx-auto d-block" alt="" />
                        <p>VALENTIN NICOLAS ELBEY <br/>
                        <a href="https://www.linkedin.com/in/valentinelbey/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a> </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>CO-FOUNDER</h3>
                        <img src={foto8} class="rounded mx-auto d-block" alt="" />
                        <p>JOAQUIN FIORIO <br/>
                        <a href="https://t.me/JoacoFiorio" rel="noreferrer" target="_blank">
                        <i class="fab fa-telegram-plane"></i></a> 
                        <a href="https://www.instagram.com/joacofiorio/" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/joaquin-fiorio-494563212" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <h3>CO-FOUNDER</h3>
                        <img src={foto7} class="rounded mx-auto d-block" alt="" />
                        <p>ESTEBAN RODRIGUEZ <br/>
                        <a href="https://instagram.com/estebannrodri?utm_medium=copy_link" rel="noreferrer" target="_blank">
                        <i class="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/EstebannnR" rel="noreferrer" target="_blank">
                        <i class="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/esteban-rodriguez-4055b3232/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin"></i></a> 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
