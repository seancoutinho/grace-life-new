import React from 'react'
import Services from '../../../api/service';
import Link from  'next/link'
import Image from 'next/image'
import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import ins4 from '/public/images/instragram/4.jpg'
import ins5 from '/public/images/instragram/5.jpg'
import ins6 from '/public/images/instragram/6.jpg'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>All Services</h2>
                    <ul>
                        {Services.slice(1,4).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Subscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="#">Privacy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h2>Instagram Shot</h2>
                    <ul>
                    <li><Image src={ins1} alt=""/></li>
                    <li><Image src={ins2} alt=""/></li>
                    <li><Image src={ins3} alt=""/></li>
                    <li><Image src={ins4} alt=""/></li>
                    <li><Image src={ins5} alt=""/></li>
                    <li><Image src={ins6} alt=""/></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How We Can <br/> Help You!</h2>
                    <p>At Gracelife Foundation, we offer a platform to listen and address any concerns you may have, providing the assistance you need. Please click the button below to get in touch with us and share your requests for support.</p>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;