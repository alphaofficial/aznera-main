import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Layout from '../components/layout'
import { useEffect } from 'react';
import Media from 'react-media';

function Discover () {


    function f (){
        if(event.target.nodeName.toLowerCase() != 'a') {
            //window.open(this.querySelector('.bage_title').href);
            return 0;
        }
    }

    return (
       <Layout page="discover">
           <Media query="(min-width: 1024px)">
            {matches =>
                matches ? (
                    <header class="header text-white h-100 h-fullscreen pb-0 overflow-hidden" style={{backgroundImage: 'url(/assets/img/discover.png)', backgroundColor: '#262a37'}}>
                        <div class="container text-center">
                            <div class="row align-items-center h-100">

                            
                            </div>
                        </div>
                    </header>
                ):
                (
                    <img src="/assets/img/discover.png" style={{paddingTop: '2em'}}/>
                )
            }
            </Media>
            
            <section class="section" style={{backgroundColor: 'white'}}>
                <div class="container">
                <div class="row gap-y align-items-center" style={{marginBottom: '10em'}}>

                    <div class="col-md-7 col-sm-12" style={{padding: '1em'}}>
                        <h1 class="fw-500">Discover Azmera</h1>
                        <p style={{lineHeight: '1.8em', fontSize: '14px'}}>As a people, our identity is shaped by our culture. And Like the root of a tree, we are firmly strengthened by the values and elements of this identity. Who we are isn’t merely because of where we are from, but in all we do; the way we talk; the songs we sing and even the food we eat. At Azmera, we serve experiences of a rich Ghanaian culture, that’s spans across all 16 regions. For over 8 years, we have steadily built a brand that merges our flavoursome culture with a quality dining encounter. From a steaming plate of aromatic Jollof served in plantain leaves, to the mouth-watering appeal of palm nut soup is served in earthenware, our food is carefully prepared to your delight, leaving you with a taste of Ghana that can never be forgotten.</p>

                        <button type="button" className="btn btn-sm btn-primary" style={{background: '#FF6B05', borderColor: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'capitalize'}}>View Menu</button>
                    </div>

                    <div class="col-md-4 col-sm-12 mx-auto">
                        <video id="vid" width="100%" style={{width: '100%'}} height="300" poster="/assets/img/video-overlay.png" controls style={{borderRadius: '20px'}}>
                            <source src="/assets/video/discover.mp4" type="video/mp4"/>
                            <source src="/assets/video/discover.ogg" type="video/ogg"/>
                        </video>
                    </div>

                    <div className="col-md-12 mx-auto" style={{textAlign: 'center'}}>
                        <div class="en" id="delivery_takeout_rect" onClick={f}>
                        <a href="https://t.restaurantguru.com/Azmera-Restaurant-Accra" class="bage_header" target="_blank">Azmera Restaurant</a>
                        
                        <div class="bage_wrapper"><div><div class="bage_icon" style={{background: "url('https://restaurantguru.com/css/badge/img/delivery_white.svg') no-repeat center"}}>&nbsp;</div><div class="bage_city"><span>Best food delivery</span><span class="bage_city_name">in Accra</span></div></div></div>
                        
                        <a href="https://restaurantguru.com" target="_blank" class="bage_title">Restaurant Guru 2020</a></div>
                    </div>

                    
                    
                </div>
                </div>
            </section>
            <Media query="(min-width: 1024px)">
            {matches =>
                matches ? (
                    <div class="icon-bar">
                            <a class="socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="socials"  href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="socials"  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
                ):
                (
                    <footer class="footer" style={{backgroundColor: 'white'}}>
                        <div class="container text-center">

                            <div class="social social-bg-pale-brand">
                                <a class="social-facebook socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                                <a class="social-facebook socials" href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                                <a class="social-facebook socials" href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                            </div>

                        </div>
                    </footer>
                )
            }
            </Media>
        </Layout>
    )
}

  
export default Discover