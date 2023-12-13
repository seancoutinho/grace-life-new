import React from "react";
import Teams from '../../api/team'
import Link from 'next/link'
import Image from "next/image";



const TeamSection2 =() => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="wpo-team-area-s2 section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <span>Expert Team</span>
                            <h2>Meet The Gracelife Foundation Team</h2>
                            <p>We have a great team that helps us make the projects at Gracelife Foundation a success</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="team-items">
                        <div className="row">
                            {Teams.slice(0,3).map((Team, tm) => (
                                <div className="col-lg-4 col-md-6 col-12" key={tm}>
                                    <div className="wpo-team-item" >
                                        <div className="wpo-team-img">
                                            <Image src={Team.tImg} alt=""/>
                                        </div>
                                        <div className="wpo-team-content">
                                            <h2><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${Team.slug}`}>{Team.name}</Link></h2>
                                            <span>{Team.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default TeamSection2;