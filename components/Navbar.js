import React, { useState } from 'react'
import Modal from 'react-modal';
import Reservations from './reservation'
import { navigate } from '../utils/functions';
import Media from 'react-media';
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'

export default function Navbar(){

  const [toggle, setToggle] = useState(false)

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

  function toggleNav() {
    setToggle(!toggle)
  }

    return (
      <>
        {isDesktopOrLaptop &&
              <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px', padding: '1em 0'}}>
                <div className="container-fluid">
                  <div className="navbar-left mr-4">
                    <Link href="/"><a className="navbar-brand">
                      <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                      <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                    </a>
                    </Link>
                  </div>

                  <section className="navbar-mobile" style={{float: "right"}}>
                    

                    <div className="ml-auto">
                    <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{setIsOpen(true)}}>Reservations</button>
                    <Link href="/shop"><a style={{cursor: 'pointer'}}><img src="/assets/img/shop.png" alt="..." style={{width: '10%', marginLeft: '2em'}} /></a></Link>
                    </div>
                    
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
              <nav className="mobile-nav navbar navbar-raw navbar-expand-lg navbar-dark navbar-stick-dark" style={{padding: '0px', textAlign: 'right', marginTop: '0', position: 'fixed', top: 0, background: 'white'}}  data-navbar="fixed" >
                  <div className="container">
                    <div className="navbar-left">
                      <Link href="/"><a className="">
                        <img className="logo-dark" style={{width: '5em', marginLeft: '.5em'}} src="/assets/img/logo-regular.png" alt="logo"/>
                      </a></Link>
                    </div>
                    <div className="ml-auto" style={{float: 'right', textAlign: 'right'}}>
                        <Link href="/shop"><a><img src="/assets/img/shop.png" alt="..." style={{width: '15%'}} /></a></Link>
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