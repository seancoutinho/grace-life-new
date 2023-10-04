import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';



const EventTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="wpo-event-details-wrap">
            <div className="wpo-event-details-tab">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Event Schedule
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Map Location
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            <div className="wpo-event-details-content">
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <div id="Schedule" className="tab-pane active">
                                    <p>The races are scheduled to start at 6 a.m to 10 a.m</p>
                                    {/* <ul>
                                        <li>The wise man therefore in these matters.</li>
                                        <li>In a free hour, when our power of choice  and when nothing.</li>
                                        <li>Else he  pains to avoid pains.</li>
                                        <li>We denounce with righteous indignation dislike men. </li>
                                        <li>Which is the same as saying through.</li>
                                        <li>The wise man therefore always holds in these matters.</li>
                                        <li>Power of choice  and when nothing.</li>
                                        <li>Pains to avoid worse pains.</li>
                                    </ul> */}
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div id="Map" className="tab-pane">
                                    <div className="contact-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15197.40872032842!2d31.0657599!3d-17.775138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931af1f1387bcd5%3A0x181279d77d3d4f3e!2sOld%20Georgians%20Sports%20Club!5e0!3m2!1sen!2suk!4v1696235760957!5m2!1sen!2suk"></iframe>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div className="event-contact">
                                    <div className="wpo-donations-details">
                                        <form method="post" className="contact-validation-active" id="contact-form-main" onSubmit={SubmitHandler}>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group">
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 form-group clearfix">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea className="form-control" name="note" id="note" placeholder="Massage"></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">Submit Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}

export default EventTabs;