
export default function Navbar(){

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px', padding: '1em 0'}}>
            <div className="container-fluid">
              <div className="navbar-left mr-4">
                <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
                <a className="navbar-brand" href="#">
                  <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                  <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                </a>
              </div>

              <section className="navbar-mobile" style={{float: "right"}}>
                

                <div className="ml-auto">
                  <button type="button" style={{backgroundColor: '#FF6B05', borderColor: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success" href="#">Order Here</button>
                </div>
              </section>

            </div>
        </nav>
    )
}