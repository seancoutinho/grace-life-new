import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Projects from '../../api/projects';
import Services from '../../api/service';
import Footer from '../../components/footer';
import Logo from '/public/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'



const projectDetailsPage = (props) => {
    const router = useRouter()

    const projectDetails = Projects.find(item => item.slug === router.query.slug)


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={projectDetails?.title} pagesub={projectDetails?.title} />
            <section className="wpo-project-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-content">
                                    <Image src={projectDetails?.projectImg} alt="" />
                                    <div className="wpo-project-single-content-des">
                                        <div className="wpo-project-single-content-des-wrap">
                                            <div className="wpo-project-single-content-des-left">
                                                <h2>{projectDetails?.title}</h2>
                                                <p></p>
                                                <p>{projectDetails?.dec}</p>
                                                <h1>{projectDetails?.fullDec?.title1}</h1>
                                                <p>{projectDetails?.fullDec?.description1}</p>
                                                <h1>{projectDetails?.fullDec?.title2}</h1>
                                                <p>{projectDetails?.fullDec?.description2}</p>
                                                <h1>{projectDetails?.fullDec?.title3}</h1>
                                                <p>{projectDetails?.fullDec?.description3}</p>
                                                <h1>{projectDetails?.fullDec?.title4}</h1>
                                                <p>{projectDetails?.fullDec?.description4}</p>
                                                <h1>{projectDetails?.fullDec?.title5}</h1>
                                                <p>{projectDetails?.fullDec?.description5}</p>
                                            </div>
                                            {/* <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Beneficiaries: <span> Robert William</span></li>
                                                    <li>Location :<span>7 Lake Street,London</span></li>
                                                    <li>Date :<span>20 Apr 2021</span></li>
                                                    <li>Duration : <span>3 Month</span></li>
                                                    <li>Tag :<span>Charity, Wildlife</span></li>
                                                </ul>
                                            </div> */}
                                        </div>
                                        <div className="wpo-project-single-sub-img">
                                            <ul>
                                                <li><Image src={projectDetails?.prImg1} alt="" /></li>
                                                <li><Image src={projectDetails?.prImg2} alt="" /></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-solutions-section">
                                    <h2>Benefits of Such Projects</h2>
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
                                                        <p>The lower-numbered purposes are better understood and practiced </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p>{projectDetails?.benefits}</p>
                                    <p></p>
                                </div>
                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care">Charity</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care">Wildlife</Link></li>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care">Nature</Link></li>
                                        </ul>
                                    </div>
                                    <div className="share">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care"><i className="ti-facebook"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href="/project/Medical-Care"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link onClick={ClickHandler} href="/project/School-In-Uganda">
                                            <div className="post-img">
                                                <Image src={projectDetails?.prImg1} alt="" />
                                            </div>
                                            <div className="post-text">
                                                <span className="post-control-link">Previous Post</span>
                                                <span className="post-name">Child Education</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link onClick={ClickHandler} href="/project/School-In-India">
                                            <div className="post-text">
                                                <span className="post-control-link">Next Post</span>
                                                <span className="post-name">Healthy Food</span>
                                            </div>
                                            <div className="post-img">
                                                <Image src={projectDetails?.prImg2} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default projectDetailsPage;
