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
            <section class="section" style={{backgroundColor: 'white', marginTop: '8em'}}>
                <div class="container">
                <div class="row" style={{marginBottom: '10em'}}>
                    

                    
                    
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