export default function NavbarMain(props){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px', padding: '1em 0'}}>
            <div className="container-fluid">

              <div className="navbar-left">
                <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
                <a className="navbar-brand" href="#">
                    <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                    <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                </a>
              </div>

              <section className="navbar-mobile">
                <nav className="nav nav-navbar ml-auto">
                  <a className="nav-link active" href="/">Home</a>
                  <a className="nav-link" href="/discover">Discover Azmera</a>
                  <a className="nav-link" href="/menu">Menu</a>
                  <a className="nav-link" href="/gallery">Gallery</a>
                  <a className="nav-link" href="/work">Work With Us</a>
                  <a className="nav-link" href="/contact">Contact</a>
                </nav>
                <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" href="#">Order Here</button>
              </section>

            </div>
          </nav>
    )
}