export default function Header(){

    return(
        <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
            <div class="container-fluid">
            <div class="row h-100" style={{padding: '0px'}}>
                <div class="col-3" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover', opacity: '.4'}}>
                    <div className="overlay">Discover Azmera</div>
                </div>
                <div class="col-2">
                    <div class="row">
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <div className="overlay">Menu</div>
                        </div>
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <div className="overlay">Work With Us</div>
                        </div>
                    </div>
                </div>
                <div class="col-4"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage02.png) no-repeat', backgroundSize: 'cover'}}>
                    <div className="overlay">Menu</div>
                </div>
                <div class="col-3"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage03.png) no-repeat', backgroundSize: 'cover'}}>
                        <div className="overlay">Contact</div>
                </div>
            </div>
            </div>
        </header>
    )
}