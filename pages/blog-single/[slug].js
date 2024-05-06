import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import BlogSidebar from '../../components/BlogSidebar';
import Scrollbar from '../../components/scrollbar';
import Image from 'next/image'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog/img-3.jpg'
import gl2 from '/public/images/blog/img-2.jpg'
import Logo from '/public/images/logo.png'

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails?.blogSingleImg} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi ti-user"></i> By <Link href="/">{BlogDetails?.author}</Link> </li>
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>{BlogDetails?.description}</p>
                                    <p>{BlogDetails?.description2}</p>
                                    <h3>{BlogDetails?.description3Heading}</h3>
                                    <Image src={BlogDetails?.description3Image} alt="" />
                                    <p>{BlogDetails?.description3}</p>
                                    <h3>{BlogDetails?.description4Heading}</h3>
                                    <Image src={BlogDetails?.description4Image} alt="" />
                                    <p>{BlogDetails?.description4}</p>
                                    <h3>{BlogDetails?.description5Heading}</h3>
                                    <p>{BlogDetails?.description5}</p>
                                    {BlogDetails?.quote && (
                                        <blockquote>
                                            {BlogDetails?.quote}
                                        </blockquote>
                                    )}
                                    <Image src={BlogDetails?.QuoteImage} alt="" />
                                    <p>{BlogDetails?.description6}</p>
                                    <p>{BlogDetails?.description7}</p>
                                    <div className="gallery">
                                        <div>
                                            <Image src={BlogDetails?.blogBtmImage1} alt="" />
                                        </div>
                                        <div>
                                            <Image src={BlogDetails?.blogBtmImage2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/blog-single/Great-Satisfiction">Donation</Link></li>
                                            <li><Link href="/blog-single/Great-Satisfiction">Charity</Link></li>
                                            <li><Link href="/blog-single/Great-Satisfiction">Education</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div> */}

                                <div className="author-box">

                                    <div className="author-content">
                                        <Link href="/" className="author-name">Author: {BlogDetails?.author}</Link>
                                        <p>{BlogDetails?.aboutAuthor}</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><Link href="https://www.facebook.com/chasi235"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="https://twitter.com/chasi235"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link href="https://www.linkedin.com/in/tinokundachasara/"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link href="https://www.instagram.com/zimbo_chazz/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* 
                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href="/">
                                            <span className="post-control-link">Previous Post</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="/">
                                            <span className="post-control-link">Next Post</span>
                                        </Link>
                                    </div>
                                </div> */}

                                {/* <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Comments</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1" id="comment-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>Lily Watson <span className="comments-date">January
                                                                            12,2022 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system,
                                                                            and expound the actual teachings of the great
                                                                            explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li className="comment">
                                                                <div>
                                                                    <div className="comment-theme">
                                                                        <div className="comment-image"><Image src={blog5} alt="" /></div>
                                                                    </div>
                                                                    <div className="comment-main-area">
                                                                        <div className="comment-wrapper">
                                                                            <div className="comments-meta">
                                                                                <h4>John Abraham <span className="comments-date">January
                                                                                    12,2022 At 9.00am</span></h4>
                                                                            </div>
                                                                            <div className="comment-area">
                                                                                <p>I will give you a complete account of the
                                                                                    system, and expound the actual teachings
                                                                                    of the great explorer of the truth, </p>
                                                                                <div className="comments-reply">
                                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Post Comments</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Website" type="url" />
                                                <input placeholder="Name" type="text" />
                                                <input placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Post Comment" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <BlogSidebar blLeft={props.blLeft} />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
