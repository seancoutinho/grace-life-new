import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import VideoSec from '../../components/VideoSec';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import Service from '../../components/Service';
import AboutS2 from '../../components/AboutS2';
import FunFact from '../../components/FunFact';
import CauseSection from '../../components/CauseSection';
import TeamSection2 from '../../components/TeamSection2';



import PartnerSection from '../../components/PartnerSection';


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <VideoSec/>
            <TeamSection2 />
            <Service Fclass={'wpo-features-section-s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
