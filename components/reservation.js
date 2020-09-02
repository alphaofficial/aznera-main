import { useState } from "react"


function Reservations (props) {

    const [time, setTime] = useState("")
    const [people, setPeople] = useState("")
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [choice, setChoice] = useState("")
    const [tableName, setTableName] = useState("")
    const [numberOfChildren, setNumberOfChildren] = useState("")
    
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-8" style={{height: 'auto', backgroundImage: 'url(/assets/img/reservation.png)', backgroundSize: 'cover'}}>
                
                </div>
                <div class="col-md-4" style={{height: 'auto', padding: '1em 3em'}}>
                    <div style={{textAlign: 'right', marginBottom: '.5em', cursor:'pointer'}} onClick={props.callback}><img src="/assets/img/close.svg"/></div>
                    <p style={{color: '#4C1A16', fontSize: '25px',  fontWeight: 'bold'}}>BOOK A SEAT AT OUR TABLES</p>
                    <p style={{fontSize: '14px',color: '#4C1A16'}}>Kindly note that all reservations hold for a maximum of 2hrs. You will receive a confirmation email once your reservation has been successful. If you do not receive this confirmation email, there may have been an error in your reservation. Please contact our reservations team on ( +233 302 77 06 06 +233 268 02 99 68 reservations@azmerarestaurant.com) if you have any queries.</p>
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
                                    <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="Reservations-Phone" class="custom-form-control" placeholder="Phone number" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
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
                                <div class="form-group">
                                    <input type="text" onChange={(e)=>{setPeople(e.target.value)}} name="Reservations-People" class="custom-form-control" placeholder="No. of adults" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                </div>
                            </div>
                            <div className="col-6" style={{paddingLeft: '0px'}}>
                                <div class="form-group">
                                    <input type="text" onChange={(e)=>{setTime(e.target.value)}} name="Reservations-Time" class="custom-form-control" placeholder="Time" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
                                </div>
                            </div>
                        </div>
                        <p style={{color: '#4C1A16', fontSize: '14px'}}>Select a Date</p>
                        <div className="row" style={{padding: '0px', marginBottom: '2em'}}>
                            <div className="col-md-12">
                                <div class="form-group">
                                    <input type="date" onChange={(e)=>{setDate(e.target.value)}} name="Reservations-Date" class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}} />
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
    )
}

  
export default Reservations