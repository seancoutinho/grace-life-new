import React, { Component } from 'react'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import Image from 'next/image'
import Logo from '/public/images/gracelife-logo.png'

export default class Header extends Component {

    state = {
        isSearchShow: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow
        })
    }



    render() {
        const { isSearchShow } = this.state;

        const SubmitHandler = (e) => {
            e.preventDefault()
        }

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }
        return (
            <header id="header" className={this.props.topbarNone}>
                <div className={`wpo-site-header ${this.props.hclass}`}>
                    <nav className="navigation navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div className="mobail-menu">
                                        <MobileMenu />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="navbar-header">
                                        <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src='/images/gracelife-logo.png' width={100} height={100}
                                            alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-1 col-1">
                                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                        <button className="menu-close"><i className="ti-close"></i></button>
                                        <ul className="nav navbar-nav mb-2 mb-lg-0">
                                            <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/">Home</Link>

                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/cause">Projects</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/cause-single/green-house-donations">Rugare Community Greenhouse</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/cause-single/dandamire-clinic-maternity-ward">Dandamera Clinic Maternity Ward</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/cause-single/scholarships-fees">School Fees Scholarships</Link></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <Link href="/event-s2">Events</Link>
                                                <ul className='sub-menu'>
                                                    <li><Link onClick={ClickHandler} href="/event-single/cancer-run">2023 Cancer Run</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-single/gbv-awareness">16 Days Against Gender Based Violence</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/event-single/international-aids-day">World AIDS Day</Link></li>
                                                </ul>
                                            </li>
                                            {/* <li className="menu-item-has-children">
                                                <Link href="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/service/Clean-Water">Service Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/project/African-Macaw-Bird">Project Single</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/donate">Donate</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/404">Error 404</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/register">Sign Up</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li className="menu-item-has-children">
                                                <Link onClick={ClickHandler} href="/blog">Blog</Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                    <li className="menu-item-has-children">
                                                        <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                        <ul className="sub-menu">
                                                            <li><Link onClick={ClickHandler} href="/blog-single/Make-Someone’s">Blog details right sidebar</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Make-Someone’s">Blog details left
                                                                sidebar</Link></li>
                                                            <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Make-Someone’s">Blog details
                                                                fullwidth</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                            <li><Link onClick={ClickHandler} href="/about">Who We Are</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2 col-2">
                                    <div className="header-right">
                                        <div className="close-form">
                                            <Link onClick={ClickHandler} className="theme-btn" href="/donate">Donate Now</Link>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
