import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Head from 'next/head';

const BlogSingle = (props) => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Grace Life Foundation - Empowering Communities</title>
                <meta name="description" content="Empowering communities through education, healthcare, and sustainable development initiatives. Join us in making a difference!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Grace Life Foundation - Empowering Communities" />
                <meta property="og:description" content="Empowering communities through education, healthcare, and sustainable development initiatives. Join us in making a difference!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.gracelifefoundation.com/" />
                <meta property="og:image" content="https://www.gracelifefoundation.com/images/logo.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Grace Life Foundation - Empowering Communities" />
                <meta name="twitter:description" content="Empowering communities through education, healthcare, and sustainable development initiatives. Join us in making a difference!" />
                <meta name="twitter:image" content="https://www.gracelifefoundation.com/images/gracelife-logo.png" />

                {/* Other Meta Tags */}
                <link rel="canonical" href="https://www.gracelifefoundation.com/" />
                <link rel="icon" href="/favicon.ico" />

                {/* Additional tags for SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="grace life, foundation, community empowerment, education, healthcare, sustainable development" />
            </Head>

            <Fragment>
                <Navbar Logo={Logo} />
                <PageTitle pageTitle={'Blogs'} pagesub={'Blog'} />
                <BlogList />
                <Footer />
                <Scrollbar />
            </Fragment>
        </>
    )
};
export default BlogSingle;
