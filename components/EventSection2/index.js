import React from 'react'
import Link from 'next/link'
import Events from '../../api/event'
import Image from 'next/image'

const EventSection2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="wpo-event-area-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Events</span>
                            <h2>Fundraising Events</h2>
                            <p>Here's a list of upcoming events Gracelife will be taking part in and organizing</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-event-wrap">
                    <div className="row justify-content-center">
                        <div className="col col-lg-10">
                            {Events.slice(0,3).map((event, eitem)=>(
                                <div className="wpo-event-single" key={eitem}>
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <Image src={event.eImg} alt=""/>
                                        </div>
                                        <div className="wpo-event-content">
                                            <div className="wpo-event-text-top">
                                                <span>{event.date}</span>
                                                <h2><Link onClick={ClickHandler} href='/event-single/[slug]' as={`/event-single/${event.slug}`}>{event.eTitle}</Link></h2>
                                                <p>{event.dec}</p>
                                                <Link onClick={ClickHandler} className="read-more" href='/event-single/[slug]' as={`/event-single/${event.slug}`}>Learn More...</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSection2;