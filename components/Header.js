export default function Header(){

    return(
        <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
            <div class="container-fluid">
            <div class="row h-100" style={{padding: '0px'}}>
                <div class="col-md-3 col-sm-12" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                    <a href="/discover" className="overlay"><h2 className="title home-title">Discover Azmera  <hr className="dash" /></h2></a>
                    <p className="subtext">Experiences Of A Rich Ghanaian Culture</p>
                </div>
                <div class="col-md-2 col-sm-12">
                    <div class="row">
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/menu" className="overlay"><h2 className="title home-title">Menu <hr className="dash" /></h2></a>
                        </div>
                        <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage01.png) no-repeat', backgroundSize: 'cover'}}>
                            <a href="/work" className="overlay"><h2 className="title home-title">Work <hr className="dash" /></h2></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage02.png) no-repeat', backgroundSize: 'cover'}}>
                    <a href="/menu" className="overlay"><h2 className="title home-title">Gallery<hr className="dash" /></h2></a>
                </div>
                <div class="col-md-3 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/homepage03.png) no-repeat', backgroundSize: 'cover'}}>
                        <a href="/contact" className="overlay"><h2 className="title home-title">Contact<hr className="dash" /></h2></a>
                </div>
            </div>
            </div>
        </header>
    )
}