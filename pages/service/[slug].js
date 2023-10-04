import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Services from '../../api/service'
import ServiceSidebar from './single/sidebar';
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';
import Logo from '/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Benefits from './single/benefits';



const SeviceSinglePage = (props) => {
    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={serviceDetails?.title} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceDetails?.simg1} alt="" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>{serviceDetails?.title}</h2>
                                        <p>{serviceDetails?.description}</p>
                                        <h2>{serviceDetails?.title2}</h2>
                                        <p>{serviceDetails?.description2}</p>
                                        <h2>{serviceDetails?.title3}</h2>
                                        <p>{serviceDetails?.description3}</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceDetails?.simg2} alt="" /></li>
                                                <li><Image src={serviceDetails?.simg3} alt="" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-solutions-section">
                                    <h2>Other Gracelife Foundation Services</h2>
                                    <div className="row">
                                        {Services.slice(1, 4).map((service, Sitem) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={Sitem}>
                                                <div className="wpo-solutions-item">
                                                    <div className="wpo-solutions-icon">
                                                        <div className="icon">
                                                            <i className={`fi ${service.fIcon1}`}></i>
                                                        </div>
                                                    </div>
                                                    <div className="wpo-solutions-text">
                                                        <h2><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></h2>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* <Benefits /> */}
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default SeviceSinglePage;
