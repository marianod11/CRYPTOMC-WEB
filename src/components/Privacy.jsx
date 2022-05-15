import React from "react";
import condiciones from "../images/terminosycondiciones.pdf"
import privacidad from "../images/privacidad.pdf"
import pancake from "../images/pancakeswap-cake-logo.png"
import binance from "../images/binance-logo-1.png"
import meta from "../images/meta.png"


export default function Privacy() {
    return (
      
        <div >
            <div style={{textAlign:"center"}}>
                            <img className="patro" src={pancake} alt="" />
                            <img className="patro" src={binance} alt="" />
                            <img className="patro" src={meta} alt="" />
                            </div>
                    <div style={{margin:"50px 0px 0px 0px"}} className="col-md-12 col-lg-12 Privacy ">
                         
                        <h3 >CryptoMc </h3>

                        <div>
                            <a href={privacidad}>PRIVACY POLICY</a>
                            <a href={condiciones}>TERMS AND CONDITIONS OF USE</a>
                        </div>
                        
                
            </div>
            </div>
    )
}
