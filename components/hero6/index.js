import React from "react";
import Slider from "react-slick";
import Link from 'next/link'



const Hero6 = (props) => {


    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className={`wpo-hero-slider ${props.heroClass}`}>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Educate A Child</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>Your donation will give the gift of education, empowering children with the knowledge and skills they need to succeed in life.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/cause" className="theme-btn">Projects</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Care for a Soul */}
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/about-us.png'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Care for a Soul</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>We strive to offer on-demand aid for elderly individuals and those requiring ongoing medication, ensuring they have access to essential primary healthcare and necessary medical supplies.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/cause" className="theme-btn">Projects</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-6.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title">
                                            <h2>Feed A Soul</h2>
                                        </div>
                                        <div className="wpo-hero-subtitle">
                                            <p>Under our "Feed a Soul" program, Grace Life is dedicated to delivering balanced meals to 200,000 households by 2025, emphasizing sustainable food security solutions, including our Greenhouse Farming Initiatives.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/cause" className="theme-btn">Projects</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero6;