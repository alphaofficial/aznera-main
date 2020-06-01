import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';

function Gallery () {

    return (
        <>
            <HeadFile />
            <NavbarMain />
            <section class="section">
                <div class="container">
                <div class="row" style={{marginTop: '2em'}}>
                    <div className="col-md-12 text-center" style={{ marginBottom: '2em'}}>
                        <h1 class="fw-500">Discover Azmera</h1>
                        <div style={{width: '100%'}}>
                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        </div>
                    
                    </div>

                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>
                            <div className="gallery-overlay"></div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>

                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>

                        </div>
                    </div>
                </div>

                <div class="row" style={{marginTop: '3em'}}>
                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>

                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>

                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div style={{height: '682px', width: '100%', background: 'transparent url(/assets/gallery/01.jpg) 0% 0% no-repeat padding-box', backgroundSize: 'cover'}}>

                        </div>
                    </div>
                </div>
                </div>
            </section>

          
        </>
    )
}

  
export default Gallery