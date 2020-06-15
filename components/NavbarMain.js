import Modal from 'react-modal';
import Reservations from './reservation'

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
                  <button style={{backgroundColor: '#ffffff', borderColor: '#FF6B05', color: '#FF6B05', borderRadius: '20px', padding: '.5em 2em'}} className="btn btn-sm btn-success menu-btn" onClick={()=>{setIsOpen(true)}}>Reservations</button>
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
    )
}