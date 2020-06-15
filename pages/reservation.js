import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';

function Reservations () {

    return (
        <>
            <HeadFile />
            <NavbarMain />
            <header class="header text-white h-100 h-fullscreen pb-0 overflow-hidden" style={{backgroundImage: 'url(/assets/img/discover.png)', backgroundColor: '#262a37'}}>
                <div class="container text-center">
                    <div class="row align-items-center h-100">

                    
                    </div>
                </div>
            </header>
            <section class="section" style={{backgroundColor: 'white'}}>
                <div class="container">
                <div class="row gap-y align-items-center" style={{marginBottom: '10em'}}>

                    <div class="col-md-7">
                    <h1 class="fw-500">Discover Azmera</h1>
                    <p style={{lineHeight: '1.8em', fontSize: '14px'}}>As a people, our identity is shaped by our culture. And Like the root of a tree, we are firmly strengthened by the values and elements of this identity. Who we are isn’t merely because of where we are from, but in all we do; the way we talk; the songs we sing and even the food we eat. At Azmera, we serve experiences of a rich Ghanaian culture, that’s spans across all 16 regions. For over 8 years, we have steadily built a brand that merges our flavoursome culture with a quality dining encounter. From a steaming plate of aromatic Jollof served in plantain leaves, to the mouth-watering appeal of palm nut soup is served in earthenware, our food is carefully prepared to your delight, leaving you with a taste of Ghana that can never be forgotten.</p>

                    <button type="button" className="btn btn-sm btn-primary" style={{background: '#FF6B05', borderColor: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'capitalize'}}>View Menu</button>
                    </div>

                    <div class="col-md-4 mx-auto">
                        <video id="vid" width="100%" style={{width: '100%'}} height="300" poster="/assets/img/video-overlay.png" controls style={{borderRadius: '20px'}}>
                            <source src="/assets/video/discover.mp4" type="video/mp4"/>
                            <source src="/assets/video/discover.ogg" type="video/ogg"/>
                        </video>
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

  
export default Reservations