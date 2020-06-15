import HeadFile from './HeadFile'
import NavbarMain from './NavbarMain'
import { useState, useEffect } from 'react'


export default function Layout (props){

    const [page, setPage] = useState("")
    
    useEffect(()=>{
        setPage(props.page)
        console.log("P",props.page)
    }, [props.page])

    return(
        <>
            <HeadFile />
            <NavbarMain page={page}/>
            {props.children}

        </>
    )
}