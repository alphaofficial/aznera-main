import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Lightbox from 'react-image-lightbox';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive'

function Gallery () {
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

    const images = [
        "/assets/gallery/01.jpg",
        "/assets/gallery/02.jpg",
        "/assets/gallery/03.jpg",
        "/assets/gallery/04.jpg",
        "/assets/gallery/05.jpg",
        "/assets/gallery/06.jpg",
        "/assets/gallery/07.jpg",
        "/assets/gallery/08.jpg",
        "/assets/gallery/09.jpg",
        "/assets/gallery/10.jpg",
        "/assets/gallery/11.jpg",
        "/assets/gallery/12.jpg",
    ]

    const [photoIndex, setPhotoIndex] = useState(0)
    //const [photoIndex1, setPhotoIndex1] = useState(0)
    const [isOpen, setOpen] = useState(0)
    //const [isOpen1, setOpen1] = useState(0)

    return (
        <Layout page="gallery">
            {isDesktopOrLaptop &&
                    <section class="section" style={{backgroundColor: 'white'}}>
                        <div class="container">
                        <div class="row" style={{marginTop: '2em'}}>
                            <div className="col-md-12 text-center" style={{ marginBottom: '2em', marginTop: '2em'}}>
                                <h1 class="fw-500">Gallery</h1>
                                <div style={{width: '100%'}}>
                                    <p>Explore Our Home.</p>
                                </div>
                            
                            </div>

                            <div className="col-md-12">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'left', fontFamily: 'Belligan'}}><span style={{textDecoration: 'underline', color: '#4C1A16', textDecorationThickness: '10%'}}>The</span> <span style={{color: '#FF6B05'}}>Azmera Experience</span></p> 

                                    <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'right', fontFamily: 'Belligan'}}><span style={{color: '#4C1A16'}}>Our</span> <span style={{textDecoration: 'underline', textDecorationThickness: '10%', color: '#FF6B05', textDecorationColor: '#4C1A16'}}>Restaurant</span></p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <a href="#" className="gallery-overlay" onClick={()=>{setPhotoIndex(0); setOpen(true)}}><h2 className="title">Discover Azmera</h2></a>
                                <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                
                            </div>

                            <div className="col-md-4 text-center">
                                <a href="#" className="gallery-overlay" onClick={()=>{setPhotoIndex(6); setOpen(true)}}><h2 className="title">Discover Azmera</h2></a>
                                <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/07.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                                    <div className="gallery-overlay"></div>
                                </div>
                            </div>
                        </div>

                        


                        <div class="row" style={{marginTop: '3em'}}>
                            
                            
                           
                        </div>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => setOpen() }
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % images.length)
                                }
                            />
                        )}

                        </div>
                    </section>
                }
                {isTabletOrMobile &&
                    <section class="section" style={{backgroundColor: 'white'}}>
                        <div class="container">
                        <div class="row" style={{marginTop: '2em'}}>
                            <div className="col-md-12 col-sm-12 text-center" style={{ marginBottom: '2em', marginTop: '2em'}}>
                                <h1 class="fw-500">Gallery</h1>
                                <div style={{width: '100%'}}>
                                    <p>Explore Our Home.</p>
                                </div>
                            
                            </div>

                            <div className="col-md-12 col-sm-12 text-center" onClick={()=>{setPhotoIndex(0); setOpen(true)}}>
                                <div style={{height: '424px', width: '80%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover', margin: '0 auto'}}>
                                </div>
                            </div>

                            <div style={{textAlign: 'center', margin: '1em auto'}}>
                                <button onClick={()=>{setPhotoIndex(0); setOpen(true)}} style={{border: '1px solid #FF6B05', margin: '0 auto', background: 'transparent', fontSize: '10px', textTransform: 'uppercase', color: '#ff6b05'}}>The Azmera Experience</button>
                            </div>
                        </div>


                        <div class="row" style={{marginTop: '3em'}}>
                            <div className="col-sm-12 text-center" onClick={()=>{setPhotoIndex(8); setOpen(true)}}>
                                <div style={{height: '424px', width: '80%', background: 'transparent url(/assets/gallery/09.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover', margin: '0 auto'}}>
                                </div>
                            </div>
                            <div style={{textAlign: 'center', margin: '1em auto'}}>
                                <button onClick={()=>{setPhotoIndex(8); setOpen(true)}} style={{border: '1px solid #FF6B05', margin: '0 auto', background: 'transparent', fontSize: '10px', textTransform: 'uppercase', color: '#ff6b05'}}>Our Restaurant</button>
                            </div>
                        </div>
                        
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => setOpen() }
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % images.length)
                                }
                            />
                        )}

                        </div>
                    </section>
            }

            {isDesktopOrLaptop &&
                    <div class="icon-bar">
                            <a class="socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="socials"  href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="socials"  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
            }
            
            {isTabletOrMobile &&
                    <footer class="footer" style={{backgroundColor: 'white'}}>
                        <div class="container text-center">

                            <div class="social social-bg-pale-brand">
                                <a class="social-facebook socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                                <a class="social-facebook socials" href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                                <a class="social-facebook socials" href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                            </div>

                        </div>
                    </footer>
            }
        </Layout>
    )
}

  
export default Gallery