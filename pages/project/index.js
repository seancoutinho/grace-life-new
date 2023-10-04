import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import ProjectSection from '../../components/ProjectSection';

const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'Case Studies'} pagesub={'Recent Case Studies'}/> 
            <ProjectSection pbClass={'pb-0'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
