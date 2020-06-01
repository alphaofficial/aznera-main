export default function Header(){

    return(
        <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
            <div class="container-fluid">
            <div class="row h-100" style={{padding: '0px'}}>
                <a href="/discover"><div class="col-3" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover', opacity: '.4'}}>
                    <div className="overlay">Discover Azmera</div>
                </div></a>
                <div class="col-2">
                    <div class="row">
                        <a href="/menu"><div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <div className="overlay">Menu</div>
                        </div></a>
                        <a href="/work"><div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <div className="overlay">Work With Us</div>
                        </div></a>
                    </div>
                </div>
                <a href="/gallery"><div class="col-4"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage02.png) no-repeat', backgroundSize: 'cover'}}>
                    <div className="overlay">Gallery</div>
                </div></a>
                <a href="contact"><div class="col-3"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage03.png) no-repeat', backgroundSize: 'cover'}}>
                        <div className="overlay">Contact</div>
                </div></a>
            </div>
            </div>
        </header>
    )
}