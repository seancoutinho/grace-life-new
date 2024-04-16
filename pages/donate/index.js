import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '/public/images/logo.png'
import pimg from '/public/images/checkout/img-1.png'
import pimg2 from '/public/images/checkout/img-2.png'
import pimg3 from '/public/images/checkout/img-3.png'
import pimg4 from '/public/images/checkout/img-4.png'
import Image from 'next/image';
import CryptoJS from 'crypto-js';
import Link from 'next/link';

const DonatePage = () => {

    const INTEGRATION_KEY = "0a33fe48 - cd41 - 41a6 - b92b - 2821bc1ba02d"
    const ENCRYPTION_KEY = "eb5c85c1c7054c7ebbd4af549adb74c9"
    const SECRET_KEY = "gracelife2024"

    const [online, setOnline] = useState(true);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        amount: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://gracelife-admin-api.onrender.com/api/users/add-donar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle successful response
                console.log('Donation submitted successfully');
            } else {
                // Handle error response
                console.error('Failed to submit donation');
            }
        } catch (error) {
            // Handle network error
            console.error('Network error:', error);
        }


    };


    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Donate'} pagesub={'Donate'} />
            <div className="wpo-donation-page-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-donate-header">
                                <h2>Make a Donation</h2>
                            </div>
                            <div id="Donations" className="tab-pane">
                                <form>
                                    <div className="wpo-donations-amount">
                                        <h2>Your Donation</h2>
                                        <input type="number" className="form-control" name="amount" id="amount" onChange={handleChange} placeholder="Enter Donation Amount" />
                                    </div>
                                    <div className="wpo-donations-details">
                                        <h2>Details</h2>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" onChange={handleChange} />
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone Number" onChange={handleChange} />
                                            </div>

                                            <div className="col-lg-12 col-12 form-group">
                                                <textarea className="form-control" name="message" id="message" placeholder="Tell us more about your donation" onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-doanation-payment">
                                        <h2>Choose Your Payment Method</h2>
                                        <div className="wpo-payment-area">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="wpo-payment-option" id="open4">
                                                        <div className="wpo-payment-select">
                                                            <ul>
                                                                <li className="addToggle">
                                                                    <input onClick={() => setOnline(true)} id="add" type="radio" name="payment" value="30" />
                                                                    <label htmlFor="add">Payment By Card</label>
                                                                </li>
                                                                <li className="removeToggle">
                                                                    <input onClick={() => setOnline(false)} id="remove" type="radio" name="payment" value="30" />
                                                                    <label htmlFor="remove">Offline Donation</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {online ? <div>
                                                            <div id="open5" className="payment-name">
                                                                {/* <ul>
                                                                    <li className="visa"><input id="1" type="radio" name="size" value="30" />
                                                                        <label htmlFor="1"><Image src={pimg} alt="" /></label>
                                                                    </li>
                                                                    <li className="mas"><input id="2" type="radio" name="size" value="30" />
                                                                        <label htmlFor="2"><Image src={pimg2} alt="" /></label>
                                                                    </li>
                                                                    <li className="ski"><input id="3" type="radio" name="size" value="30" />
                                                                        <label htmlFor="3"><Image src={pimg3} alt="" /></label>
                                                                    </li>
                                                                    <li className="pay"><input id="4" type="radio" name="size" value="30" />
                                                                        <label htmlFor="4"><Image src={pimg4} alt="" /></label>
                                                                    </li>
                                                                </ul> */}
                                                                <div className="contact-form form-style">
                                                                    {/* <div className="row">
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Card holder Name</label>
                                                                            <input type="text" placeholder="" name="name" />
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Card Number</label>
                                                                            <input type="text" placeholder="" id="card" name="card" />
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>CVV</label>
                                                                            <input type="text" placeholder="" name="CVV" />
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-12 col-12">
                                                                            <label>Expire Date</label>
                                                                            <input type="text" placeholder="" name="date" />
                                                                        </div>
                                                                    </div> */}
                                                                    <a href='https://www.paynow.co.zw/Payment/Link/?q=c2VhcmNoPXNlYW4lNDByYXlzdW5jYXBpdGFsLmNvbSZhbW91bnQ9MC4wMCZyZWZlcmVuY2U9QStnZW50bGUrZG9uYXRpb24rdG8rdGhlK0dMRitjYXVzZSZsPTA%3d' target='_blank'><img src='https://www.paynow.co.zw/Content/Buttons/Medium_buttons/button_donate_medium.png' /></a>

                                                                </div>
                                                            </div>
                                                        </div> : (
                                                            <div className='wpo-doanation-payment'>
                                                                <p>Thank you for your interest to donate to our cause and help someone out there. Kindly visit our offices at the address below or call us for assistance to make a cash donation.</p>
                                                                <br />
                                                                <h2 className='p-12'>20 Ray Amm Road, Eastlea, Harare or call us on +263 8677008143</h2>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default DonatePage;

