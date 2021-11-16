import React, { Fragment } from 'react';
import Navbar from "./navbar.js";
// import MetaTags from 'react-meta-tags';

// import Loading from '../blocks/loading/Loading';
// import Header from '../blocks/header/Header';
// import Footer from '../blocks/footer/Footer';

// import PageTitle404 from '../blocks/page-title/PageTitle404';
// import BackToHome from '../components/button/BackToHome';

const page404 = () => {
    document.body.classList.add( 'error404' );
    document.body.classList.add( 'bg-fixed' );
    document.body.classList.add( 'bg-line' );

    return (
        <Fragment>
            {/* <MetaTags>
                <meta charSet="UTF-8" />
                <title>404</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags> */}

            {/* <Loading />

            <Header /> */}
            
            <Navbar />

            <main id="main" className="site-main bg-half-ring-up">
                {/* <PageTitle404 /> */}

                <div id="page-content" className="block">
                    <div className="wrapper">
                        <p className="spacer p-top-lg w-50 m-0">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it.</p>

                        <div className="spacer p-top-xs d-xl-flex d-lg-flex d-md-flex justify-content-between block m-top-extrasmall">
                            <div className="align-self-center w-50">
                            </div>

                            {/* <BackToHome /> */}
                        </div>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </Fragment>
    );
};

export default page404;
