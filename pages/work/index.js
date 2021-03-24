import HeadFile from '../../components/HeadFile'
import NavbarMain from '../../components/NavbarMain'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import { useEffect } from 'react';
import Layout from '../../components/layout';
import Media from 'react-media';

function Work () {

    return (
        <Layout page="work">
            <Media query="(min-width: 1024px)">
            {matches =>
                matches ? (
                    <header className="header text-white h-100 h-fullscreen pb-0 overflow-hidden" style={{backgroundImage: 'url(/assets/img/reservations.png)', backgroundColor: '#262a37'}}>
                        <div className="container text-center">
                            <div className="row align-items-center h-100">

                            
                            </div>
                        </div>
                    </header>
                ):
                (
                    <img src="/assets/img/reservations.png" style={{paddingTop: '2em'}}/>
                )
            }
            </Media>
            
            <section className="section" style={{background: 'white'}}>
                <div className="container">
                <div className="row gap-y align-items-center" style={{marginBottom: '10em'}}>
                    <form action="https://formspree.io/hr@azmerarestaurant.com" method="POST"> 
                    <input type="text" hidden={true} name="Website: Work With Us" />
                    <div className="col-md-12 mx-auto">
                        <h1 className="fw-500" style={{textAlign: 'center', marginTop: '1em', marginBottom: '1em'}}>Work With Us</h1>
                        <p style={{lineHeight: '1.8em', textAlign:'center'}}>We maintain professional standards for all our employees and are always looking for responsible men and women to</p>
                        <p style={{color: '#FF6B05', textAlign: 'center'}}>Join The Azmera Team!</p>

                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="form-group">
                                    <input type="text" name="name" placeholder="Name" className="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '2px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em', borderRadius: '10px', padding: '.5em 1em'}}/>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="form-group">
                                    <input type="text" name="email" placeholder="Email" className="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '2px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em', borderRadius: '10px', padding: '.5em 1em'}}/>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="form-group">
                                    <input type="text" name="phonenumber" placeholder="Phonenumber" className="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '2px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em', borderRadius: '10px', padding: '.5em 1em'}}/>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="form-group">
                                    <select name="position" className="custom-form-control" id="name" style={{width: '100%', background: 'transparent', border: '2px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em', borderRadius: '10px', padding: '.5em 1em'}}>
                                        <option>Positions</option>
                                        <option value="Cook">Cook</option>
                                        <option value="Cleaner">Cleaner</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-8 mx-auto">
                                <div className="form-group" style={{marginBottom: '2em'}}>
                                    <label htmlFor="file" style={{marginTop: '1em'}}>
                                        <p style={{color: '#4C1A16', margin: '.3em 0'}}>Attach your CV</p>
                                        <div style={{background: "#4C1A16 0% 0% no-repeat padding-box", color: 'white', height: '30px', fontSize: '14px', width: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>Choose file</div>
                                    </label>
                                    <input type="file" name="attachment" id="file" placeholder="Choose file" className="custom-form-control" style={{width: '100%', background: 'transparent', display: 'none'}}/>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <button type="submit" className="btn btn-sm btn-primary" style={{width: '50%', background: '#4C1A16 0% 0% no-repeat padding-box', boxShadow: '0px 3px 6px #00000029',  borderColor: '#4C1A16', borderRadius: '39px', opacity: '1', color: 'white'}}>click here to apply</button>
                                </div>
                                
                               
                            </div>
                            
                        </div>

                    </div>
                    </form>
                    
                    
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

  
export default Work