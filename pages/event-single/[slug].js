import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Events from '../../api/event'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import EventTabs from './alltab'
import EventSidebar from './sidebar'
import Footer from '../../components/footer';
import Logo from '/public/images/logo.png'
import Image from 'next/image';



const TeamSinglePage = (props) => {
    const router = useRouter()

    const eventDetails = Events.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={eventDetails?.eTitle} pagesub={'Case Single'} />
            <div className="wpo-event-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="wpo-event-item">
                                <div className="wpo-event-img">
                                    <Image src={eventDetails?.eImg} alt=""/>
                                </div>
                                <div className="wpo-event-details-text">
                                    <h2>{eventDetails?.eTitle}</h2>
                                    <p>{eventDetails?.dec}</p>
                                    <h2>{eventDetails?.fullDec.title1}</h2>
                                    <p>{eventDetails?.fullDec.description1}</p>
                                    <h2>{eventDetails?.fullDec.title2}</h2>
                                    <p>{eventDetails?.fullDec.description2}</p>
                                    <h2>{eventDetails?.fullDec.title3}</h2>
                                    <p>{eventDetails?.fullDec.description3}</p>
                                    <h2>{eventDetails?.fullDec.title4}</h2>
                                    <p>{eventDetails?.fullDec.description4} <a target="_blank" href='https://bit.ly/GLFCancerRun' rel="noopener noreferrer">APPLY FOR THE CANCER RUN</a></p>
                                    <h2>{eventDetails?.fullDec.title5}</h2>
                                    <p>{eventDetails?.fullDec.description5}</p>
                                    <h2>{eventDetails?.fullDec.title6}</h2>
                                    <p>{eventDetails?.fullDec.description6}</p>
                                </div>
                                <EventTabs />
                            </div>
                        </div>
                        <EventSidebar/>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;
