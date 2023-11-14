import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/gracelife-logo.png'
import Projects from '../../api/projects'
import Image from 'next/image'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Image src={Logo} alt="blog"/>
                            </div>
                            <p></p>
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/GraceLifeFDN/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/GraceLifeFDN">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/gracelifefoundation_/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} href="/cause">Projects</Link></li>
                                {/* <li><Link onClick={ClickHandler} href="/blog">Latest News</Link></li> */}
                                <li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
                                <li><Link onClick={ClickHandler} href="/event">Events</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <p>Would you have any enquiries, please feel free to contact us</p>
                                <ul>
                                    <li><i className="fi flaticon-mail"></i>info@gracelifefoundation.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+263 8677008143</li>
                                    <li><i className="fi flaticon-location"></i>20 Ray Amm, Eastlea, Harare, Zimbabwe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Projects</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem)=>(
                                    <li className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>
                                                <Image src={project.projectImg} alt=""/>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2023 Gracelife Foundation. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;