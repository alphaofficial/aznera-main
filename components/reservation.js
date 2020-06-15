

function Reservations (props) {

    return (
        <div className="container">
            <div class="row">
                <div class="col-md-8" style={{height: '520px', backgroundImage: 'url(/assets/img/reservation.png)', backgroundSize: 'cover'}}>
                
                </div>
                <div class="col-md-4" style={{height: '520px', padding: '1em 3em'}}>
                    <div style={{textAlign: 'right', marginBottom: '.5em', cursor:'pointer'}} onClick={props.callback}><img src="/assets/img/close.svg"/></div>
                    <p style={{color: '#4C1A16', fontSize: '25px',  fontWeight: 'bold'}}>BOOK A SEAT AT OUR TABLES</p>
                    <p style={{fontSize: '14px',color: '#4C1A16'}}>Kindly note that you will receive a confirmation email once your reservation has been successful. If you do not receive this confirmation email, there may have been an error in your reservation. Please contact our reservations team on ( +233 302 77 06 06 +233 268 02 99 68 +233 558 70 85 94 ) if you have any queries.</p>
                    <p style={{color: '#4C1A16', fontSize: '14px'}}>SELECT DINING DETALS TO BOOK</p>
                    <div className="row" style={{padding: '0px'}}>
                        <div className="col-md-6" style={{paddingRight: '0px'}}>
                            <div class="form-group">
                                <select class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}}>
                                    <option>Time</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6" style={{paddingLeft: '0px'}}>
                            <div class="form-group" style={{padding: '0px'}}>
                                <select class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}}>
                                    <option>No. of people</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p style={{color: '#4C1A16', fontSize: '14px'}}>Select a Date</p>
                    <div className="row" style={{padding: '0px', marginBottom: '2em'}}>
                        <div className="col-md-4">
                            <div class="form-group">
                                <select class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'white', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}}>
                                    <option>Month</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="form-group" style={{padding: '0px'}}>
                                <select class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}}>
                                    <option>Day</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4" >
                            <div class="form-group" style={{padding: '0px'}}>
                                <select class="custom-form-control" style={{fontSize: '12px', width: '100%', background: 'transparent', border: '3px solid #4C1A16', color: '#4C1A16', padding: '.2em .5em'}}>
                                    <option>Year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div style={{border: '1px solid #4C1A16', borderRadius:'17px', textAlign:'center', margin: '0 auto', width: '140px', fontSize: '14px', color: '#4C1A16'}}>
                        SUBMIT
                        </div>
                </div>
            </div>
        </div>
    )
}

  
export default Reservations