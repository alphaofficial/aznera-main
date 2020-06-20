import Router from 'next/router'

export const navigate = (pagename="", query=null) => {
    Router.push({
        pathname: `/${pagename}`,
        query: query,
    })
}
