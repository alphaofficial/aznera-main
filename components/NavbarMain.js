export default function NavbarMain(){

    return(
        <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px'}}>
            <div class="container-fluid">

              <div class="navbar-left">
                <button class="navbar-toggler" type="button"><span class="navbar-toggler-icon"></span></button>
                <a class="navbar-brand" href="#">
                    <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                    <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                </a>
              </div>

              <section class="navbar-mobile">
                <nav class="nav nav-navbar ml-auto">
                  <a class="nav-link active" href="/">Home</a>
                  <a class="nav-link" href="/discover">Discover Azmera</a>
                  <a class="nav-link" href="/menu">Menu</a>
                  <a class="nav-link" href="/gallery">Gallery</a>
                  <a class="nav-link" href="/work">Work With Us</a>
                  <a class="nav-link" href="/contact">Contact</a>
                </nav>
                <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} class="btn btn-sm btn-success menu-btn" href="#">Order Here</button>
              </section>

            </div>
          </nav>
    )
}