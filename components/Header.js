export default function Header(){

    return(
        <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
            <div class="container-fluid">
            <div class="row h-100" style={{padding: '0px'}}>
                <div class="col-3" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                    <a href="/discover" className="overlay"><h2 className="title">Discover Azmera</h2></a>
                </div>
                <div class="col-2">
                    <div class="row">
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/menu" className="overlay"><h2 className="title">Menu</h2></a>
                        </div>
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/work" className="overlay"><h2 className="title">Work</h2></a>
                        </div>
                    </div>
                </div>
                <div class="col-4"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage02.png) no-repeat', backgroundSize: 'cover'}}>
                    <a href="/menu" className="overlay"><h2 className="title">Gallery</h2></a>
                </div>
                <div class="col-3"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage03.png) no-repeat', backgroundSize: 'cover'}}>
                        <a href="/contact" className="overlay"><h2 className="title">Contact</h2></a>
                </div>
            </div>
            </div>
        </header>
    )
}