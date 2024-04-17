import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Services from '../../api/service';
import Projects from '../../api/projects'
import about from '/public/images/blog/about-widget.jpg'
import Image from 'next/image';

const BlogSidebar = (props) => {

    const router = useRouter()
    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-md-12 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={BlogDetails?.authorImg} alt=""/>
                    </div>
                    <h4>{BlogDetails?.author}</h4>
                    <p>{BlogDetails?.authorDescription}</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog/#"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog/#"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog/#"><i className="ti-linkedin"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 5).map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href="/blog-single/[slug]" as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,6).map((project, pitem)=>(
                            <li className="grid" key={pitem}>
                                <div className="img-holder">
                                    <Link onClick={ClickHandler} href="/project/[slug]" as={`/project/${project.slug}`}>
                                        <Image src={project.projectImg} alt=""/>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Charity</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Helping</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Education</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Medical</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Wildlife</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Donation</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">Help</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/Great-Satisfiction">World Pandamic</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                        <h2>Want to Contribute to Our  <br/> Blogs?</h2>
                        <p>Contact our administration team to submit an article and have it posted here on our site!</p>
                        <Link onClick={ClickHandler} href="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
