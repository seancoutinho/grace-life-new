import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero6 from '../components/hero6'
import Service from '../components/Service'
import AboutS2 from '../components/AboutS2'
import CauseSection from '../components/CauseSection'
import EventSection from '../components/EventSection'
import BlogSection from '../components/BlogSection'
import Footer from '../components/footer'
import Scrollbar from '../components/scrollbar'
import VideoSec from '../components/VideoSec';
import FunFact from '../components/FunFact';
import ProjectSection from '../components/ProjectSection';
import Logo from '/public/images/logo.png'
import Head from 'next/head';


const HomePage = () => {

    return (
        <Fragment>
            <Head>
                <title>Gracelife Foundation | Home</title>
                <link rel="icon" href='/images/gracelife-icon.png' type="image/x-icon" />
            </Head>
            <Navbar Logo={Logo} hclass={'wpo-header-style-2'} />
            <Hero6 heroClass={'wpo-hero-section-6'}/>
            <Service Fclass={'wpo-features-section-s2'} />
            <AboutS2 />
            <CauseSection />
            <ProjectSection />
            <EventSection />
            <BlogSection />
            <VideoSec />
            <Scrollbar />
            <Footer />
        </Fragment>
    )
};
export default HomePage;