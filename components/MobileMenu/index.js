import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },

    {
        id: 2,
        title: 'Projects',
        link: '/cause',
        submenu: [
            {
                id: 21,
                title: 'Rugare Community Greenhouse',
                link: '/cause-single/green-house-donations'
            },
            {
                id: 22,
                title: 'Dandamire Clinic Maternity Ward School Fees Scholarships',
                link: '/cause-single/dandamire-clinic-maternity-ward'
            },
            {
                id: 22,
                title: 'School Fees Scholarships',
                link: '/cause-single/scholarships-fees'
            }
        ]
    },
    {
        id: 4,
        title: 'Events',
        link: '/event-s2',
        submenu: [
            {
                id: 41,
                title: '2023 Cancer Run',
                link: 'event-single/cancer-run'
            },
            {
                id: 42,
                title: '16 Days Against GBV',
                link: '/event-single/gbv-awareness'
            },
            {
                id: 43,
                title: 'World AIDS Day',
                link: '/event-single/international-aids-day'
            }
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
    },
    {
        id: 6,
        title: 'Who We Are ',
        link: '/about',
    },
    {
        id: 7,
        title: 'Contact Us',
        link: '/contact',
    },
    {
        id: 8,
        title: 'Donate 🕊️',
        link: '/donate',
    }


]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                        <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link onClick={ClickHandler} href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                        <Collapse isOpen={item.id === isOpen}>
                                            <Card>
                                                <CardBody>
                                                    <ul>
                                                        {item.submenu.map(submenu => (
                                                            <li key={submenu.id}><Link onClick={ClickHandler} className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                        ))}
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                        : ''}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                        <span className="icon-bar first-angle"></span>
                        <span className="icon-bar middle-angle"></span>
                        <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
