import Media from 'react-media';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Header(){

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
      const isTabletOrMobileDevice = useMediaQuery({
          query: '(max-device-width: 1224px)'
      })
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return(
        <>
        {isDesktopOrLaptop &&
                <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
                    <div class="container-fluid">
                    <div class="row h-100" style={{padding: '0px'}}>
                        <div class="col-md-3 col-sm-12" style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home01.png) no-repeat', backgroundSize: 'cover'}}>
                            <Link href="/discover"><a className="overlay"><h2 className="title home-title">Discover Azmera  <hr className="dash" /></h2><p className="subtext">An Authentic Taste Of Ghanaian Culture</p></a></Link>
                        </div>
                        <div class="col-md-2 col-sm-12">
                            <div class="row">
                                <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home02.png) no-repeat', backgroundSize: 'cover'}}>
                                    <Link href="/gallery"><a className="overlay"><h2 className="title home-title">Gallery<hr className="dash" /></h2><p className="subtext">Explore Our Home</p></a></Link>
                                </div>
                                <div className="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home03.png) no-repeat', backgroundSize: 'cover'}}>
                                <Link href="/work"><a  className="overlay"><h2 className="title home-title">Work <hr className="dash" /></h2><p className="subtext">Join The Azmera Team!</p></a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home04.png) no-repeat', backgroundSize: 'cover'}}>
                            <Link href="/menu"><a className="overlay"><h2 className="title home-title">Menu <hr className="dash" /></h2><p className="subtext">Experience Our Palatable Culture</p></a></Link>
                        </div>
                        <div class="col-md-3 col-sm-12"  style={{height: '100vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home05.png) no-repeat', backgroundSize: 'cover'}}>
                            <Link href="/contact"><a className="overlay"><h2 className="title home-title">Contact<hr className="dash" /></h2><p className="subtext">Get In Touch</p></a></Link>
                        </div>
                    </div>
                    </div>
                </header>
         } 
         
         {isTabletOrMobile &&
                <header class="header h-fullscreen overflow-hidden bg-size-contain bg-img-right" style={{paddingBottom: '0px', paddingTop: '58px'}}>
                    <div class="container-fluid">
                    <div class="row h-100" style={{padding: '0px'}}>
                        <div class="col-7" style={{padding: '0px'}}>
                            <div class="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home01.png) no-repeat', backgroundSize: 'cover'}}>
                            <Link href="/discover"><a className="mobile-overlay"><h2 className="title home-title">Discover Azmera  <hr className="dash" /></h2><p className="subtext">An Authentic Taste Of Ghanaian Culture</p></a></Link>
                            </div>
                            <div class="col-12" style={{height: '50vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home04.png) no-repeat', backgroundSize: 'cover'}}>
                                <Link href="/menu"><a className="mobile-overlay"><h2 className="title home-title">Menu <hr className="dash" /></h2><p className="subtext">Experience Our Palatable Culture</p></a></Link>
                            </div>
                        </div>
                        
                        <div class="col-5" style={{padding: '0px'}}>
                                <div className="col-12" style={{height: '30vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home02.png) no-repeat', backgroundSize: 'cover'}}>
                                    <Link href="/gallery"><a className="mobile-overlay"><h2 className="title home-title">Gallery<hr className="dash" /></h2><p className="subtext">Explore Our Home</p></a></Link>
                                </div>
                                <div className="col-12" style={{height: '30vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home03.png) no-repeat', backgroundSize: 'cover'}}>
                                    <Link href="/work"><a className="mobile-overlay"><h2 className="title home-title">Work <hr className="dash" /></h2><p className="subtext">Join The Azmera Team!</p></a></Link>
                                </div>
                                <div className="col-12" style={{height: '40vh',  margin: '0px', padding: '0px', background: 'url(/assets/img/home05.png) no-repeat', backgroundSize: 'cover'}}>
                                    <Link href="/contact"><a className="mobile-overlay"><h2 className="title home-title">Contact <hr className="dash" /></h2><p className="subtext">Get In Touch!</p></a></Link>
                                </div>
                        </div>
                    </div>
                    </div>
                </header>
        }
        </>
    )
}