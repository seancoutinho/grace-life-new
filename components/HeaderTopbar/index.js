import React from 'react'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi ti-location-pin"></i>20 Ray Amm Rd, Eastlea, Harare, Zimbabwe</li>
                                <li><i className="fi flaticon-email"></i> admin1@gracelifefoundation.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li>Visit our social pages</li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/GraceLifeFDN/"><i className="ti-facebook"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/GraceLifeFDN"><i className="ti-twitter-alt"></i></a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/gracelifefoundation_/"><i className="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;