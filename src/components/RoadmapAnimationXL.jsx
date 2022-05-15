import React from 'react'
import { Popover, OverlayTrigger } from "react-bootstrap";
import closeBox from "../images/Caja Bloqueada.png"
import redBox from "../images/redbox.png"
import openBox from "../images/openBox.png"

export default function RoadmapAnimationXL() {

    const changeBox = (e) => {
        if (!e.target.src.includes('open')) {
            e.target.src = openBox;
        } else {
            e.target.src = redBox;
        }

    }

    const popover0 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q4 2021</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Team formation.</li>
                    <li>Development of game logic.</li>
                    <li>Marketing Proposal.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );
    const Popbox0 = () => (
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover0}>
            <div className='container cajitaRoadmap' id='RoadBox0'>
                <div className='row'>
                    <div className='col-5'>
                        <img onClick={changeBox} src={redBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q4</h3>
                        <h3>2021</h3>
                    </div>    
                </div>
            </div>
            

        </OverlayTrigger>
    );



    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q1 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Launch of the website.</li>
                    <li>Launch on social networks.</li>
                    <li>Video Trailer.</li>
                    <li>Marketing: Phase 1.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    const Popbox1 = () => (
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
            <div className='container cajitaRoadmap' id='RoadBox1'>
                <div className='row'>
                    <div className='col-5'>
                        <img  src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q1</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    const popover2 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q2 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>Presale NFTS. Token audit.</li>
                    <li>Private token sale round.</li>
                    <li>Token sale community round.</li>
                    <li>Listed on PancakeSwap.</li>
                    <li>Listed in Coingecko.</li>
                    <li>Marketing: Phase 2.</li>
                    <li>Launching of the Marketplace.</li>
                    <li>Game launch.</li>
                </ul>
            </Popover.Body>
        </Popover>
    );

    const Popbox2 = () => (
        <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover2}>
            <div className='container cajitaRoadmap' id='RoadBox2'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q2</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    const popover3 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q3 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>In-game advertising application.</li>
                    <li>Global Marketing: Phase 3.</li>
                    <li>Stake System.</li>
                    <li>PVP system of PERMANENT NFTs.</li>
                    <li>PVP system of TEMPORARY NFTs.</li>
                    <li>Franchises (Lands).</li>
                </ul>
            </Popover.Body>
        </Popover>
    );
    const Popbox3 = () => (
        <OverlayTrigger trigger="click" rootClose placement="top" overlay={popover3}>
            <div className='container cajitaRoadmap' id='RoadBox3'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q3</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );


    const popover4 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q4 2022</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>scholarship system. </li>
                    <li>Minigames. </li>
                    <li>multiverse. </li>

                </ul>
            </Popover.Body>
        </Popover>
    );
    const Popbox4 = () => (
        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover4}>
            <div className='container cajitaRoadmap' id='RoadBox4'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-7'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q4</h3>
                        <h3>2022</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    const popover5 = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Q1 2023</Popover.Header>
            <Popover.Body>
                <ul>
                    <li>NFT connection and earnings from different games within the multiverse. </li>

                </ul>
            </Popover.Body>
        </Popover>
    );

    const Popbox5 = () => (
        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover5}>
            <div className='container cajitaRoadmap' id='RoadBox5'>
                <div className='row'>
                    <div className='col-8'>
                        <img src={closeBox} alt="" />
                    </div>
                    <div className='col-4'>
                        <br/>
                        <h3 style={{color:"yellow"}}>Q1</h3>
                        <h3>2023</h3>
                    </div>    
                </div>
            </div>
        </OverlayTrigger>
    );

    return (
        <div className="container topathXL">
            <div className="motoXL"></div>
            <Popbox0/>
            <Popbox1/>
            <Popbox2/>
            <Popbox3/>
            <Popbox4/>
            <Popbox5/>
        </div>
    )
}
