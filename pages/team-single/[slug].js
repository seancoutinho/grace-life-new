import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router'
import Teams from '../../api/team'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';
import Image from 'next/image'
import Logo from '/public/images/logo.png'
import { toast } from 'react-toastify';

const TeamSinglePage = (props) => {
    const router = useRouter()
    const { slug } = router.query; 
    
    const TeamSingle = Teams.find(item => item.slug === router.query.slug)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        address: '',
        note: '',
        sendToEmail: TeamSingle?.workEmail,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/team-single/${slug}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully!');
                toast.success('Email sent successfully!');
            } else {
                console.error('Failed to send email');
                toast.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={TeamSingle?.name} pagesub={TeamSingle?.title} />
            <div className="attorney-pg-area section-padding">
                <div className="container">
                    <div className="attorney-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="attorney-info-img">
                                    <Image src={TeamSingle?.tImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="attorney-info-text">
                                    <h2>{TeamSingle?.name}</h2>
                                    <ul>
                                        <li>Position: <span>{TeamSingle?.title}</span></li>
                                        <li>Experience:<span>{TeamSingle?.experience}</span></li>
                                        <li>Phone:<span>{TeamSingle?.phone}</span></li>
                                        <li>Personal Email:<span>{TeamSingle?.email}</span></li>
                                        <li>Work Email:<span>{TeamSingle?.workEmail}</span></li>
                                        <li>Tel:<span>+263 8677008143</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Who is {TeamSingle?.name}</h2>
                                    <p>{TeamSingle?.description}</p>
                                </div>
                                {/* <div className="at-progress">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress yellow">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">100%</div>
                                                <div className="progress-name"><span>Success</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">100%</div>
                                                <div className="progress-name"><span>Happy Clients</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress pink">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">100%</div>
                                                <div className="progress-name"><span>Contributions</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress green">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">2500+</div>
                                                <div className="progress-name"><span>Donar</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>{TeamSingle?.education}</li>
                                        <li>{TeamSingle?.education2}</li>

                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Languages</h2>
                                    <ul>
                                        <li>{TeamSingle?.languages}</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget">
                                    <h2>Contact Me</h2>
                                    <div className="quote-form">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group half-col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name:"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group half-col">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email:"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group half-col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Subject:"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group half-col">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Address:"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group full-col">
                                                <textarea
                                                    className="form-control"
                                                    name="note"
                                                    placeholder="Description..."
                                                    value={formData.note}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="form-group full-col">
                                                <button className="btn theme-btn" type="submit">
                                                    Get In Touch
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
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
export default TeamSinglePage;
