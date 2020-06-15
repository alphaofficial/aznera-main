import HeadFile from '../components/HeadFile'
import NavbarMain from '../components/NavbarMain'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect } from 'react';

function Contact () {

    return (
        <>
            <HeadFile />
            <NavbarMain />
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
                                        <div style={{display: 'flex', marginTop: '2em'}}>
                                            <a class="" style={{marginRight: '2em'}} href="#"><img src="/assets/img/facebook_white.svg" alt="FB"/></a>
                                            <a class=""  style={{marginRight: '2em'}} href="#"><img src="/assets/img/twitter_white.svg" alt="TW"/></a>
                                            <a class=""  href="#"><img src="/assets/img/instagram_white.svg" alt="IG"/></a>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div class="form-group">
                                                    <input type="text" placeholder="Name" class="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="form-group">
                                                    <input type="email" placeholder="Email" class="custom-form-control" id="email" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="form-group">
                                                    <textarea placeholder="Your message" class="custom-form-control-textarea" id="message" rows="3" style={{width: '100%', background: 'transparent', border: '3px solid #ffffff', color: '#ffffff', padding: '.2em .5em'}}></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-sm btn-primary" style={{width: '100%', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#4C1A16', borderRadius: '39px', opacity: '1', color: '#4C1A16'}}>Send</button>
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
            </section>

          
        </>
    )
}

  
export default Contact