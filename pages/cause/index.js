import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import CauseSection from '../../components/CauseSection';

const CausePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Featured Campaigns at Gracelife Foundation'} pagesub={'Campaigns'}/> 
            <CauseSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default CausePage;

