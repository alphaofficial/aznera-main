import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';

function Menu () {

    return (
        <>
            <HeadFile />
            <NavbarMain />
            <section class="section" style={{background: 'url(/assets/img/bg.png) transparent 0% 0% repeat padding-box', backgroundSize: 'contain', width: '100%'}}>
            <div class="overlay opacity-45" style={{backgroundImage: 'linear-gradient(to bottom, #000000 0%, #000000 100%)'}}></div>
                <div class="container">
                <div className="row" style={{marginTop: '5em'}}>
                    <div className="col-md-10 mx-auto">
                        <h2>Menu</h2>
                        <br/>
                        <br/>
                        <br/>
                        <img src="/assets/img/menu01.png" alt="" />
                    </div>

                    <div className="col-md-10 mx-auto" style={{marginTop: '10em'}}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/img/menu02.png" alt="" />
                            </div>

                            <div className="col-md-6">
                                <img src="/assets/img/menu03.png" alt="" />
                            </div>
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

          
        </>
    )
}

  
export default Menu