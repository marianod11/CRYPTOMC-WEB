import cajita from "../images/cajita.png"



export function Banner() {



    return (

        <section className="Banner" id="banner">
            <div className="container">
                <div className="row  justify-content-center">

                    <div className="col-xl-5 offset-xl-1 col-md-6" id="bannerRow" >
                        <h1>CRYPTO</h1>
                        <div className="row">
                            <div className="col-md-5 col-sm-4">
                                <h1>MC</h1>
                            </div>
                            <div className="col-md-7 col-sm-8">
                                <h3>The most delicius NFT <br /> in the world</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div id="linkcol1" className="col-sm-6 col-xs navCol" style={{ textAlign: "center" }}>

                            <a href="https://discord.com/invite/QUYa4a2FHD" target="_blank" rel="noreferrer"><button>
                                    <i className="fab fa-discord"></i>Discord
                                </button></a>

                                <a href="https://t.me/+7qaDYwYdLlUwZTdh" target="_blank" rel="noreferrer"><button> <i className="fab fa-telegram-plane"></i>Telegram</button></a>


                            </div>
                            <div id="linkcol2" className="col-sm-6 col-xs navCol" style={{ textAlign: "center" }}>
                            <a href="https://twitter.com/CryptoMcOficial" target="_blank" rel="noreferrer"><button><i className="fab fa-twitter"></i>Twitter</button></a>
                                <button><i className="fab fa-medium-m"></i>Medium</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <img src={cajita} className="rounded mx-auto d-block jBounceIn" id="caja" alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
}