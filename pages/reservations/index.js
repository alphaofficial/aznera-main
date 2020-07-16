import HeadFile from '../../components/HeadFile'
import NavbarMain from '../../components/NavbarMain'
import Layout from '../../components/layout'
import { useEffect, useState } from 'react';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive'

function Reservations () {

    const [time, setTime] = useState("")
    const [people, setPeople] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [choice, setChoice] = useState("")
    const [tableName, setTableName] = useState("")
    const [numberOfChildren, setNumberOfChildren] = useState("")

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
            {isTabletOrMobile &&
                <>
                    <section class="section">
                        <img src="/assets/img/reservation.png"/>
                        <div class="container py-7">
                                <div class="row gap-y">
                                    <div className="col-md-10 mx-auto">
                                    <p style={{color: '#4C1A16', fontSize: '25px',  fontWeight: 'bold'}}>BOOK A SEAT AT OUR TABLES</p>
                                    <p style={{fontSize: '14px',color: '#4C1A16'}}>Kindly note that you will receive a confirmation email once your reservation has been successful. If you do not receive this confirmation email, there may have been an error in your reservation. Please contact our reservations team on ( +233 302 77 06 06 +233 268 02 99 68 +233 558 70 85 94 ) if you have any queries.</p>
                                    <p style={{color: '#4C1A16', fontSize: '14px'}}>SELECT DINING DETALS TO BOOK</p>
                                    <form  action="https://formspree.io/reservations@azmerarestaurant.com" method="POST">
                                        <div className="row" style={{padding: '0px'}}>
                                            <div className="col-6" style={{paddingRight: '0px'}}>
                                                <input type="text" hidden={true} name="Website Reservations" />
                                                <div class="form-group">
                                                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="Reservations-Name" class="custom-form-control" placeholder="Name" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                            <div className="col-6" style={{paddingLeft: '0px'}}>
                                                <div class="form-group" style={{padding: '0px'}}>
                                                    <input type="text" onChange={(e)=>{setPhone(e.target.value)}} name="Reservations-Phone" class="custom-form-control" placeholder="Phone number" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{padding: '0px'}}>
                                            <div className="col-6" style={{paddingRight: '0px'}}>
                                                <div class="form-group">
                                                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} name="Reservations-Email" class="custom-form-control" placeholder="Email" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                            <div className="col-6" style={{paddingLeft: '0px'}}>
                                                <div class="form-group" style={{padding: '0px'}}>
                                                    <input type="text" onChange={(e)=>{setChoice(e.target.value)}} name="Reservations-Choice" class="custom-form-control" placeholder="Buffet Service or A la Carte" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{padding: '0px'}}>
                                            <div className="col-6" style={{paddingRight: '0px'}}>
                                                <div class="form-group">
                                                    <input type="text" onChange={(e)=>{setTableName(e.target.value)}} name="Reservations-Table-Name" class="custom-form-control" placeholder="Table name" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                            <div className="col-6" style={{paddingLeft: '0px'}}>
                                                <div class="form-group" style={{padding: '0px'}}>
                                                    <input type="text" onChange={(e)=>{setNumberOfChildren(e.target.value)}} name="Reservations-Children" class="custom-form-control" placeholder="No. of children" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{padding: '0px'}}>
                                            <div className="col-6" style={{paddingRight: '0px'}}>
                                                <div class="form-group" style={{padding: '0px'}}>
                                                    <input type="text" onChange={(e)=>{setPeople(e.target.value)}} name="Reservations-People" class="custom-form-control" placeholder="No. of people" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.5em .5em'}} />
                                                </div>
                                            </div>
                                            <div className="col-6" style={{paddingLeft: '0px'}}>
                                                <div class="form-group" style={{padding: '0px'}}>
                                                    <input type="text" onChange={(e)=>{setTime(e.target.value)}} name="Reservations-Time" class="custom-form-control" placeholder="Time" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.5em .5em'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <p style={{color: '#4C1A16', fontSize: '14px'}}>Select a Date</p>
                                        <div className="row" style={{padding: '0px', marginBottom: '2em'}}>
                                            <div className="col-md-12">
                                                <div class="form-group">
                                                    <input type="date" onChange={(e)=>{setDate(e.target.value)}} name="Reservations-Date" class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.5em .5em'}} />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{textAlign: 'center'}}>
                                            <button type="submit" disabled={time && date && people ? false : true} className="submit" style={{border: '1px solid #4C1A16', borderRadius:'17px', textAlign:'center', margin: '0 auto', width: '140px', fontSize: '14px', color: '#4C1A16', background: 'transparent'}}>
                                                SUBMIT
                                            </button>
                                        </div>
                                        
                                    </form>
                                        
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
        </Layout>
    )
}

  
export default Reservations