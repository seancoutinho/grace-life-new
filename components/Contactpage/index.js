import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>20 Ray Amm Rd, Eastlea, Harare</p>
                                            <p> Zimbabwe </p>

                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>info@gracelifefoundation.com</p>
                                            <p>rejoice.utseya@gracelifefoundation.com</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+263 8677008143</p>
                                            <p>+263 73 422 3234</p>
                                        </div>
                                    </div>
                                </div> 
                                
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>Contact our administration team if you need any help or if you need to contact us</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15192.681470384761!2d31.097083!3d-17.8306467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e6ad57a5c1%3A0x56a8ea260143d9b9!2sGrace%20Life%20Foundation!5e0!3m2!1sen!2suk!4v1699949253928!5m2!1sen!2suk"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
