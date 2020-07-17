import Head from 'next/head'

export default function HeadFile(){

    return(
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <title>Azmera</title>
            <link rel="stylesheet" href="/assets/css/page.min.css" />
            <link href="https://restaurantguru.com/css/badge/delivery_takeaway/delivery_rect_large.css" rel="stylesheet"/>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
            <script type="text/javascript" src="/assets/js/page.min.js"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172879360-1"/>
            <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'UA-172879360-1');
                `,
            }}
            />
        </Head>
    )
}
