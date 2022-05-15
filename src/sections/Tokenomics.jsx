
import ruleta from "../images/ruletasupply.png"
import pieza1 from "../images/Hamburguesa por partes/1dex.png"
import pieza2 from "../images/Hamburguesa por partes/2Advisors.png"
import pieza3 from "../images/Hamburguesa por partes/3Private.png"
import pieza4 from "../images/Hamburguesa por partes/4Rewards.png"
import pieza5 from "../images/Hamburguesa por partes/5TeamTokens.png"
import pieza6 from "../images/Hamburguesa por partes/6Marketing.png"
import pieza7 from "../images/Hamburguesa por partes/7Community.png"
import token from "../images/Moneda.png"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export function Tokenomics() {
  return (
    <section className="tokenomic" id="tokenomics">
      <div className="container">
        <h1>Tokenomics</h1>
        <div className="row justify-content-center">
          <div className="col-md-6 tokeburger">
            <div className="row justify-content-center parts">

              <div id="part1" className="col-12 d-flex  justify-content-center part">
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      100% TGE
                    </Tooltip>}>
                  <img src={pieza1} alt={pieza1} />
                </OverlayTrigger>
              </div>

              <div id="part2" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      5% weekly
                    </Tooltip>}>
              <img src={pieza2} alt={pieza2} />
              </OverlayTrigger>
              </div>


              <div id="part3" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      20% TGE and 20% Linear per month
                    </Tooltip>}>
              <img src={pieza3} alt={pieza3} />
              </OverlayTrigger>
              </div>
              

              <div id="part4" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      -
                    </Tooltip>}>
              <img src={pieza4} alt={pieza4} />
              </OverlayTrigger>
              </div>

              <div id="part5" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      10% Linear per month from month 2
                    </Tooltip>}>
              <img src={pieza5} alt={pieza5} />
              </OverlayTrigger>
              </div>

              <div id="part6" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      8,33% weekly
                    </Tooltip>}>
              <img src={pieza6} alt={pieza6} />
              </OverlayTrigger>
              </div>
              <div id="part7" className="col-12 d-flex  justify-content-center part">
              <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip className="tlp" id="tooltip1">
                      100% TGE
                    </Tooltip>}>
              <img src={pieza7} alt={pieza7} />
              </OverlayTrigger>


              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex  justify-content-center">
            <img src={ruleta} className="ruleta" alt="" />
          </div>
        </div>
      </div>
      <img className="token" id="token1" src={token} alt="token" />
      <img className="token" id="token2" src={token} alt="token" />
      <img className="token" id="token3" src={token} alt="token" />
      <img className="token" id="token4" src={token} alt="token" />


      <img className="token" id="token7" src={token} alt="token" />
      <img className="token" id="token8" src={token} alt="token" />
      <img className="token" id="token9" src={token} alt="token" />
      <img className="token" id="token10" src={token} alt="token" />

    </section>
  )
}
