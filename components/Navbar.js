import React, { useState } from 'react'
import Modal from 'react-modal';
import Reservations from './reservation'
import { navigate } from '../utils/functions';
import Media from 'react-media';

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
        <Media query="(min-width: 1024px)">
          {matches =>
            matches ? (
              <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'white', top: '0px', padding: '1em 0'}}>
                <div className="container-fluid">
                  <div className="navbar-left mr-4">
                    <a className="navbar-brand" href="/">
                      <img className="logo-dark" src="/assets/img/logo-regular.png" alt="logo"/>
                      <img className="logo-light" src="/assets/img/logo-white.png" alt="logo"/>
                    </a>
                  </div>

                  <section className="navbar-mobile" style={{float: "right"}}>
                    

                    <div className="ml-auto">
                    <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{setIsOpen(true)}}>Reservations</button>
                    <span style={{cursor: 'pointer'}} onClick={()=>{navigate("shop")}}><img src="/assets/img/shop.png" alt="..." style={{width: '10%', marginLeft: '2em'}} /></span>
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
            ) : (
              <nav className="navbar navbar-raw navbar-expand-lg navbar-dark navbar-stick-dark" style={{padding: '0px', textAlign: 'right', marginTop: '0', position: 'fixed', top: 0, background: 'white'}}  data-navbar="fixed" >
                  <div className="container">
                    
                    <a className="" href="/">
                      <img className="logo-dark" style={{width: '5em', marginLeft: '.5em'}} src="/assets/img/logo-regular.png" alt="logo"/>
                    </a>
                    
                    <div className="ml-auto" style={{float: 'right', textAlign: 'right'}}>
                      <img src="/assets/img/shop.png" alt="..." style={{width: '15%'}} />
                        <button className="btn btn-xs btn-secondary" onClick={toggleNav} style={{backgroundColor:'transparent', border: 'none', fontSize: '25px', color: 'black'}}>{toggle ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}</button>                  
                    </div>
                  </div>


                  <div className=""  style={{display: toggle ? 'block' : 'none', backgroundColor: 'white', width: '100%', height: 'auto', marginTop: '-5px', marginBottom: '5em'}}>
                    <div className="row align-items-center text-center">
                      <div className="col">
                        <nav className="nav nav-bold nav-lead flex-column my-7">
                          <a className="mobile-menu-link" style={{borderTopLeftRadius: '35px'}}  href="/">Home</a>
                          <a className="mobile-menu-link" href="/discover">Discover Azmera</a>
                          <a className="mobile-menu-link" href="/menu">Menu</a>
                          <a className="mobile-menu-link" href="/gallery">Gallery</a>
                          <a className="mobile-menu-link" href="/work">Work With Us</a>
                          <a className="mobile-menu-link" style={{borderBottomRightRadius: '35px'}}  href="/contact">Contact</a>
                        </nav>
                        <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{setIsOpen(true)}}>Reservations</button>
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
                  </div>

              </nav>
            )
          }
        </Media>
    )
}