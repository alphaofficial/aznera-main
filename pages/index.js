// This page has defined `getInitialProps` to do data fetching.
// Next.js will execute `getInitialProps`
// It will wait for the result of `getInitialProps`
// When the results comes back Next.js will render the page.
// Next.js wil do this for every request that comes in.
import fetch from 'isomorphic-unfetch'
import HeadFile from '../components/HeadFile'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'

function HomePage () {

    const [popup, setPopup] = useState(false)

    function checkPopup(){
        var seen = sessionStorage.getItem("seen");
        if(seen === "true"){}
        else {
           setPopup(true)
        }
    }

    function handlePopup(){
        sessionStorage.setItem("seen", "true")
        setPopup(false)
    }

    useEffect(()=>{
        checkPopup()
    }, [])

    return (
        <>
            <HeadFile />
            <Navbar />
            <Header />
            <div className="bg-dark col-12 mx-auto py-4" style={{position: 'fixed', top: 0, left: 0, zIndex: '9999', fontFamily: 'Quicksand', color: '#ffffff', display: popup ? 'block' : 'none', opacity: '.9'}} data-animation="slide-up">
                <div className="row gap-y align-items-center">
                    <div className="col-md-12">
                        <strong>A MESSAGE TO OUR CUSTOMERS</strong>
                        <p style={{fontFamily: 'Quicksand'}}>For over 8 years, we have been dedicated to meeting the hygienic standards of our industry and would like to assure you that our commitment to a safe dining experience remains a top priority as we take extra precautions to ensure a safe environment for all customers during these novel times From our kitchen to your door, whether take-out or delivery, all meals are carefully handled in a safe workspace. Customers are encouraged to do their bit to minimize contact and maintain social distancing rules by paying for orders online via our site or through Mobile Money platforms.Let’s endeavor to stay safe as we learn to live with COVID-19 and help curb the spread by staying home when we absolutely must.</p>
                        <p>- CEO, Afua Krobea Asante.</p>
                    </div>

                    <div className="col-md-12">
                    <button className="btn btn-sm btn-outline-light" onClick={handlePopup}>Got it</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

  
export default HomePage