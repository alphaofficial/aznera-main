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

function HomePage () {
    return (
        <>
            <HeadFile />
            <Navbar />
            <Header />
            <Footer />
        </>
    )
}

  
export default HomePage