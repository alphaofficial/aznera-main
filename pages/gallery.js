import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';
import Layout from '../components/layout';

function Gallery () {

    return (
        <Layout page="gallery">
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
                        <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'left', fontFamily: 'Belligan'}}><span style={{textDecoration: 'underline', color: '#4C1A16', textDecorationThickness: '10%'}}>The</span> <span style={{color: '#FF6B05'}}>Azmera Experience</span></p> 
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/02.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/03.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                </div>

                <div class="row" style={{marginTop: '3em', marginBottom: '8em'}}>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/04.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/05.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/06.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                </div>


                <div class="row" style={{marginTop: '3em'}}>
                    <div className="col-md-12" >
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <p style={{textTransform: 'uppercase', fontWeight: 'bold', fontSize: '20px', textAlign: 'right', fontFamily: 'Belligan'}}><span style={{color: '#4C1A16'}}>Our</span> <span style={{textDecoration: 'underline', textDecorationThickness: '10%', color: '#FF6B05', textDecorationColor: '#4C1A16'}}>Restaurant</span></p> 
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/07.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/08.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/09.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                </div>

                <div class="row" style={{marginTop: '3em', marginBottom: '5em'}}>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/10.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/11.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="#" className="gallery-overlay"><h2 className="title">Discover Azmera</h2></a>
                        <div style={{height: '650px', width: '100%', background: 'transparent url(/assets/gallery/12.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                </div>
                <div class="icon-bar">
                            <a class="socials" href="#"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="socials"  href="#"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="socials"  href="#"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

  
export default Gallery