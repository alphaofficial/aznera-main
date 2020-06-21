import Media from 'react-media';

export default function Header(){

    return(
        <Media query="(min-width: 1024px)">
          {matches =>
            matches ? (
                <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
                    <div class="container-fluid">
                    <div class="row h-100" style={{padding: '0px'}}>
                        <div class="col-md-3 col-sm-12" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home01.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/discover" className="overlay"><h2 className="title home-title">Discover Azmera  <hr className="dash" /></h2><p className="subtext">Experiences Of A Rich Ghanaian Culture</p></a>
                        </div>
                        <div class="col-md-2 col-sm-12">
                            <div class="row">
                                <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home02.png) no-repeat', backgroundSize: 'cover'}}>
                                    <a href="/gallery" className="overlay"><h2 className="title home-title">Gallery<hr className="dash" /></h2><p className="subtext">Explore Our Home</p></a>
                                </div>
                                <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home03.png) no-repeat', backgroundSize: 'cover'}}>
                                    <a href="/work" className="overlay"><h2 className="title home-title">Work <hr className="dash" /></h2><p className="subtext">Join The Azmera Team!</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home04.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/menu" className="overlay"><h2 className="title home-title">Menu <hr className="dash" /></h2><p className="subtext">Experience Our Palatable Culture</p></a>
                        </div>
                        <div class="col-md-3 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home05.png) no-repeat', backgroundSize: 'cover'}}>
                                <a href="/contact" className="overlay"><h2 className="title home-title">Contact<hr className="dash" /></h2><p className="subtext">Get In Touch</p></a>
                        </div>
                    </div>
                    </div>
                </header>
            ) : (
                <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
                    <div class="container-fluid">
                    <div class="row h-100" style={{padding: '0px'}}>
                        <div class="col-7" style={{padding: '0px'}}>
                            <div class="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home01.png) no-repeat', backgroundSize: 'cover'}}>
                                <a href="/discover" className="mobile-overlay"><h2 className="title home-title">Discover Azmera  <hr className="dash" /></h2><p className="subtext">Experiences Of A Rich Ghanaian Culture</p></a>
                            </div>
                            <div class="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home04.png) no-repeat', backgroundSize: 'cover'}}>
                                <a href="/discover" className="mobile-overlay"><h2 className="title home-title">Menu <hr className="dash" /></h2><p className="subtext">Experiences Of A Rich Ghanaian Culture</p></a>
                            </div>
                        </div>
                        
                        <div class="col-5" style={{padding: '0px'}}>
                                <div className="col-12" style={{height: '30vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home02.png) no-repeat', backgroundSize: 'cover'}}>
                                    <a href="/gallery" className="mobile-overlay"><h2 className="title home-title">Gallery<hr className="dash" /></h2><p className="subtext">Explore Our Home</p></a>
                                </div>
                                <div className="col-12" style={{height: '30vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home03.png) no-repeat', backgroundSize: 'cover'}}>
                                    <a href="/work" className="mobile-overlay"><h2 className="title home-title">Work <hr className="dash" /></h2><p className="subtext">Join The Azmera Team!</p></a>
                                </div>
                                <div className="col-12" style={{height: '40vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home05.png) no-repeat', backgroundSize: 'cover'}}>
                                    <a href="/work" className="mobile-overlay"><h2 className="title home-title">Contact <hr className="dash" /></h2><p className="subtext">Get In Touch!</p></a>
                                </div>
                        </div>
                    </div>
                    </div>
                </header>
            )
          }
        </Media>
    )
}