import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about-us.png'
import Image from 'next/image'


const AboutS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={abimg} alt="" />
                                {/* <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="round-ball-1"></div>
                                <div className="round-ball-2"></div>
                                <div className="round-ball-3"></div>
                                <div className="round-ball-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span>About Us</span>
                            <h2>Gracelife Foundation: Making a Difference in African Communities</h2>
                            <p>Welcome to Gracelife Foundation, a charity organization dedicated to delivering sustainable change in African communities.</p>
                            <ul>
                                <li>Feed a Soul ~ We provide food
                                    security solutions which are sustainable. One
                                    such solution is our Green House Farming
                                    Initiatives.</li>
                                <li>Care for a Soul ~ Our mission is to offer support, care, and hope to individuals facing challenging circumstances.</li>
                                <li>Educate a Child ~ We believe in the power of education and strive to provide educational opportunities for underprivileged children.</li>
                            </ul>
                            <Link onClick={ClickHandler} className="theme-btn-s2" href="/about">Learn More</Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutS2;