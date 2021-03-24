import HeadFile from '../../components/HeadFile'
import NavbarMain from '../../components/NavbarMain'
import Layout from '../../components/layout'
import { useEffect } from 'react';
import Media from 'react-media';
import Link from 'next/link'

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
                    <header className="header text-white h-100 h-fullscreen pb-0 overflow-hidden" style={{backgroundImage: 'url(/assets/img/discover.png)', backgroundColor: '#262a37'}}>
                        <div className="container text-center">
                            <div className="row align-items-center h-100">

                            
                            </div>
                        </div>
                    </header>
                ):
                (
                    <img src="/assets/img/discover.png" style={{paddingTop: '2em'}}/>
                )
            }
            </Media>
            
            <section className="section" style={{backgroundColor: 'white'}}>
                <div className="container">
                <div className="row gap-y align-items-center" style={{marginBottom: '10em'}}>

                    <div className="col-md-7 col-sm-12" style={{padding: '1em'}}>
                        <h1 className="fw-500">Discover Azmera</h1>
                        <p style={{lineHeight: '1.8em', fontSize: '14px'}}>The essence of FAMILY has always been woven tightly into our culture as Ghanaians. These are the people who guide and inspire us to be the best versions of ourselves, the people who know our lowest points and the ones we can’t imagine spending the good days without. It comes as no surprise that this festive season we toast to this foundation of love for there is no greater gift than that of family. Be them relatives or friends that have become a major part of your life, FAMILY is truly all you need throughout the year. May you and yours experience the everlasting joy of the holiday period. Our gift to you this season is that of Family, for whenever two or more are gathered for this reason, one can always find joy to bask in, memories to make and great food to enjoy..</p>

                    <a href="/assets/menu.pdf" target="_blank" className="btn btn-sm btn-primary" style={{background: '#FF6B05', borderColor: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'capitalize'}}>View Menu</a>
                    </div>

                    <div className="col-md-4 col-sm-12 mx-auto">
                        <video id="vid" width="100%" style={{width: '100%'}} height="300" poster="/assets/img/video-overlay-02.jpg" controls style={{borderRadius: '20px'}}>
                            <source src="/assets/video/discover.mp4" type="video/mp4"/>
                            <source src="/assets/video/discover.ogg" type="video/ogg"/>
                        </video>
                    </div>

                    <div className="col-md-12 mx-auto" style={{textAlign: 'center', marginTop: '3em'}}>
                        <h2>Our Holiday Offering</h2>
                        <p style={{fontSize: '18px', color: "#4C1A16", marginTop: '2em'}}>Azmera Family Platter Package</p>

                        <a href="/menu" className="btn btn-sm btn-primary" style={{background: '#FFFFFF', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'capitalize', marginBottom: '2em'}}>Click Here</a>


                        <p style={{fontSize: '18px', color: "#4C1A16", marginTop: '2em'}}>Azmera Buffet Basket</p>

                        <a href="/menu" className="btn btn-sm btn-primary" style={{background: '#FFFFFF', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'capitalize', marginBottom: '2em'}}>Click Here</a>

                    </div>

                    <div className="col-md-8 mx-auto" style={{textAlign: 'center'}}>
                        <p style={{fontSize: '15px', color: "#4C1A16", marginTop: '2em', lineHeight: '2em'}}>If You're in the mood to pop out for some fun during the <span style={{color: '#FF6B05'}}>holidays</span>, have a look at the events we have to offer for you and family.</p>

                        <a href="/assets/events.pdf" target="_blank" className="btn btn-sm btn-primary" style={{background: '#FF6B05', borderColor: '#FF6B05', borderRadius: '41px', fontFamily: 'Quicksand', textTransform: 'uppercase', marginBottom: '2em'}}>View Events</a>
                    </div>


                    <div className="col-md-12 mx-auto" style={{textAlign: 'center', marginTop: '5em'}}>
                        <div className="en" id="delivery_takeout_rect" onClick={f}>
                        <a href="https://t.restaurantguru.com/Azmera-Restaurant-Accra" className="bage_header" target="_blank">Azmera Restaurant</a>
                        
                        <div className="bage_wrapper"><div><div className="bage_icon" style={{background: "url('https://restaurantguru.com/css/badge/img/delivery_white.svg') no-repeat center"}}>&nbsp;</div><div className="bage_city"><span>Best food delivery</span><span className="bage_city_name">in Accra</span></div></div></div>
                        
                        <a href="https://restaurantguru.com" target="_blank" className="bage_title">Restaurant Guru 2020</a></div>
                    </div>

                    
                    
                </div>
                </div>
            </section>
            <Media query="(min-width: 1024px)">
            {matches =>
                matches ? (
                    <div className="icon-bar">
                            <a className="socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a className="socials"  href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a className="socials"  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
                ):
                (
                    <footer className="footer" style={{backgroundColor: 'white'}}>
                        <div className="container text-center">

                            <div className="social social-bg-pale-brand">
                                <a className="social-facebook socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                                <a className="social-facebook socials" href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                                <a className="social-facebook socials" href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
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