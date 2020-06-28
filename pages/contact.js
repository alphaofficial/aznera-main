import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Layout from '../components/layout'
import { useEffect } from 'react';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive'

function Contact () {

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

    return (
        <Layout page="contact">
            <>
            {isDesktopOrLaptop &&
                    <section class="section" style={{background: 'url(/assets/img/contact.png) transparent 0% 0% repeat padding-box', backgroundSize: 'contain', height: '100vh', width: '100%'}}>
            
                        <footer class="footer text-white" style={{background: '#4C1A16 0% 0% no-repeat padding-box', opacity: '0.81', position: "fixed", bottom: '0', width: '100%', marginTop: '3em'}}>
                            <div class="container py-7">
                                <div class="row gap-y">
                                    <div className="col-md-10 mx-auto">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>No 9 Arku Korsa Rd, Roman Ridge Accra </p>
                                                <p>+233 302 77 06 06</p>
                                                <p>+233 268 02 99 68</p>
                                                <p>+233 558 70 85 94</p>
                                                <p>reservations@azmerarestaurant.com</p>
                                                <div style={{display: 'flex', marginTop: '2em'}}>
                                                    <a class="" style={{marginRight: '2em'}} href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook_white.svg" alt="FB"/></a>
                                                    <a class=""  style={{marginRight: '2em'}} href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter_white.svg" alt="TW"/></a>
                                                    <a class=""  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram_white.svg" alt="IG"/></a>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                            <form action="https://formspree.io/reservations@azmerarestaurant.com" method="POST"> 
                                            <input type="text" hidden={true} name="Website: Contact us" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="name" placeholder="Name" class="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="email" name="email" placeholder="Email" class="custom-form-control" id="email" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <textarea placeholder="Your message" name="message" class="custom-form-control-textarea" id="message" rows="3" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn btn-sm btn-primary" style={{width: '100%', background: '#ffffff 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#4C1A16', borderRadius: '39px', opacity: '1', color: '#4C1A16'}}>Send</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                                
                                                

                                                
                                            </form>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </footer>
                        <div class="icon-bar">
                            <a class="socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="socials"  href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="socials"  href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                    </div>
                    </section>  
            }
            
            {isTabletOrMobile &&
            <>
                    <section class="section">
                        <img src="/assets/img/contact.png"/>
                        <div class="container py-7">
                                <div class="row gap-y">
                                    <div className="col-md-10 mx-auto">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12" style={{padding: '1em'}}>
                                                <p><strong>Thank you for visiting Azmera Restaurant</strong></p>
                                                    
                                                <p><strong>We value your comments and suggestions. The information you provide below will help us serve you better</strong></p>
                                                
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                            <form action="https://formspree.io/reservations@azmerarestaurant.com" method="POST"> 
                                            <input type="text" hidden={true} name="Website: Contact us" />
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="name" placeholder="Name" class="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '2px solid #1C1C1C', color: '#1C1C1C', padding: '.2em .5em', borderRadius: '7px'}}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="email" name="email" placeholder="Email" class="custom-form-control" id="email" style={{width: '100%', background: 'transparent', border: '2px solid #1C1C1C', color: '#1C1C1C', padding: '.2em .5em', borderRadius: '7px'}}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div class="form-group">
                                                            <input type="text" name="phonenumber" placeholder="Phone Number" class="custom-form-control" id="phonenumber" style={{width: '100%', background: 'transparent', border: '2px solid #1C1C1C', color: '#1C1C1C', padding: '.2em .5em', borderRadius: '7px'}}/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div class="form-group">
                                                            <textarea placeholder="Comments" name="message" class="custom-form-control-textarea" id="message" rows="3" style={{width: '100%', background: 'transparent', border: '2px solid #1C1C1C', color: '#1C1C1C', padding: '.2em .5em', borderRadius: '7px'}}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div class="form-group" style={{textAlign: 'center'}}>
                                                            <button type="submit" class="btn btn-sm btn-primary" style={{width: '50%', background: '#FF6B05 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#FF6B05', borderRadius: '39px', opacity: '1', color: 'white'}}>Send</button>
                                                        </div>
                                                    </div>

                                                    <div className="col-12" style={{marginTop: '3em'}}>
                                                        <div class="form-group" style={{textAlign: 'center'}}>
                                                            <button type="submit" class="btn btn-sm btn-primary" style={{background: '#FF6B05 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#FF6B05', borderRadius: '30px', opacity: '1', color: 'white', fontSize: '15px',}}><i className="fa fa-map-marker"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div class="form-group" style={{textAlign: 'center'}}>
                                                            <p style={{fontWeight: 'bold'}}>No 9 Arku Korsa Rd</p>
                                                            <p style={{fontWeight: 'bold'}}>Roman Ridge, Accra.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12" style={{marginTop: '1em'}}> 
                                                        <div class="form-group" style={{textAlign: 'center'}}>
                                                            <button type="submit" class="btn btn-sm btn-primary" style={{background: '#FF6B05 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#FF6B05', borderRadius: '30px', opacity: '1', color: 'white', fontSize: '15px',}}><i className="fa fa-phone"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div class="form-group" style={{textAlign: 'center'}}>
                                                            <p style={{fontWeight: 'bold'}}>+233 302 77 06 06</p>
                                                            <p style={{fontWeight: 'bold'}}>+233 268 02 99 68 </p>
                                                            <p style={{fontWeight: 'bold'}}>+233 558 70 85 94</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </form>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                    </section>  
                    <footer class="footer" style={{backgroundColor: 'white'}}>
                    <div class="container text-center">

                        <div class="social social-bg-pale-brand">
                            <a class="social-facebook socials" href="https://web.facebook.com/AzmeraRestaurantgh/"><img src="/assets/img/facebook.svg" alt="FB"/></a>
                            <a class="social-facebook socials" href="https://twitter.com/Azmera_Res"><img src="/assets/img/twitter.svg" alt="TW"/></a>
                            <a class="social-facebook socials" href="https://www.instagram.com/azmerarestaurant/"><img src="/assets/img/instagram.svg" alt="IG"/></a>
                        </div>

                    </div>
                </footer>
                </>
                }
        </>
        </Layout>
    )
}

  
export default Contact