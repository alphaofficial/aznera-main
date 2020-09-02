import Modal from 'react-modal';
import Reservations from './reservation'
import { useState, useEffect } from 'react';
import Media from 'react-media';
import Link from 'next/link'

import { useMediaQuery } from 'react-responsive'

export default function NavbarMain(props){

  const customStyles = {
    overlay:{
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      padding: '0px'
    },
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding: '0px'
    }
  };

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

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   
  }
 
  function closeModal(){
    setIsOpen(false);
  }


  const [page, setPage] = useState("")
  const [toggle, setToggle] = useState(false)


  function toggleNav() {
    setToggle(!toggle)
  }
  
  useEffect(()=>{
    setPage(props.page)
    console.log(props.page)
  }, [props.page])

    return(
        <>
        {isDesktopOrLaptop &&
              <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px', padding: '1em 0'}}>
                  <div className="container-fluid">

                    <div className="navbar-left">
                      <button className="navbar-toggler" type="button"><span className="navbar-toggler-icon"></span></button>
                      <Link href="/"><a className="navbar-brand">
                          <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                          <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                      </a></Link>
                    </div>

                    <section className="navbar-mobile">
                      <nav className="nav nav-navbar ml-auto">
                        <Link href="/"><a className="nav-link" style={{color: page == "home" ? "#FF6B05" : null}} href="/">Home</a></Link>
                        <Link href="/discover"><a className="nav-link" style={{color: page == "discover" ? "#FF6B05" : null}}>Discover Azmera</a></Link>
                        <div className="dropbtn">
                          <Link href="/menu">
                            <a className="nav-link" style={{color: page == "menu" ? "#FF6B05" : null}}>Menu</a>
                          </Link>
                          <div className="dropdown-content">
                            <a href="/menu#azmera_specials">Azmera Specials</a>
                            <a href="/menu#family_platter">Family platter</a>
                            <a href="/menu#buffet_basket">Buffet Basket</a>
                            <a href="/menu#xpress_specials">Xpress Specials</a>
                          </div>
                        </div>
                        <Link href="/gallery"><a className="nav-link" style={{color: page == "gallery" ? "#FF6B05" : null}}>Gallery</a></Link>
                        <Link href="/work"><a className="nav-link" style={{color: page == "work" ? "#FF6B05" : null}}>Work With Us</a></Link>
                        <Link href="/contact"><a className={page == "contact" ? "nav-link active" : "nav-link"} style={{color: page == "contact" ? "#FF6B05" : null}}>Contact</a></Link>
                      </nav>
                        <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{setIsOpen(true)}}>Reservations</button>
                        <Link href="/shop"><a style={{backgroundColor: '#FF6B05', borderColor: '#FF6B05', color: '#FFFFFF', borderRadius: '20px', padding: '.5em 2em', cursor: 'pointer', marginLeft: '1em'}} className="btn btn-sm btn-success menu-btn">Shop <i className="fa fa-arrow-right"></i></a></Link>
                    </section>

                  </div>  
                  <Modal 
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                        <Reservations callback={closeModal}/>
                  </Modal>              
                </nav>
       } 

       {isTabletOrMobile &&
              <nav className="navbar navbar-raw navbar-expand-lg navbar-dark navbar-stick-dark" style={{padding: '0px', textAlign: 'right', marginTop: '0', position: 'fixed', top: 0, background: 'white'}}  data-navbar="fixed" >
                  <div className="container">
                    <div className="navbar-left">
                      <a className="" href="/">
                        <img className="logo-dark" style={{width: '5em', marginLeft: '.5em'}} src="/assets/img/logo-regular.png" alt="logo"/>
                      </a>
                    </div>
                    <div className="ml-auto" style={{float: 'right', textAlign: 'right'}}>
                      <Link href="/shop"><a style={{backgroundColor: '#FF6B05', borderColor: '#FF6B05', color: '#FFFFFF', borderRadius: '20px', padding: '.5em 2em', cursor: 'pointer', marginRight: '1em'}} className="btn btn-sm btn-success menu-btn">Shop <i className="fa fa-arrow-right"></i></a></Link>
                        <button className="btn btn-xs btn-secondary" onClick={toggleNav} style={{backgroundColor:'transparent', border: 'none', fontSize: '25px', color: 'black'}}>{toggle ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}</button>                  
                    </div>
                  </div>


                  <div className=""  style={{display: toggle ? 'block' : 'none', backgroundColor: 'white', width: '100%', height: 'auto', marginTop: '-5px', marginBottom: '5em'}}>
                    <div className="row align-items-center text-center">
                      <div className="col">
                        <nav className="nav nav-bold nav-lead flex-column my-7">
                          <Link href="/"><a className="mobile-menu-link" style={{borderTopLeftRadius: '35px'}}>Home</a></Link>
                          <Link href="/discover"><a className="mobile-menu-link">Discover Azmera</a></Link>
                          <Link href="/menu"><a className="mobile-menu-link">Menu</a></Link>
                          <Link href="/gallery"><a className="mobile-menu-link">Gallery</a></Link>
                          <Link href="/work"><a className="mobile-menu-link">Work With Us</a></Link>
                          <Link href="/contact"><a className="mobile-menu-link" style={{borderBottomRightRadius: '35px'}} >Contact</a></Link>
                        </nav>
                        <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{navigate("reservations")}}>Reservations</button>
                      </div>
                    </div>

                    <Modal 
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                        <Reservations callback={closeModal}/>
                  </Modal>     
                  </div>

              </nav>
       }

       </>
    )
}