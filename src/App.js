import React, {Component} from 'react';
import './App.scss';

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class App extends Component {
    render() {
        return (
            <div className="page">

                <section className="header">
                    <div className="header__outere">
                        <div className="header__inner container justify-content-center">
                            <div className="header__inner__content">
                                <div className="header__inner__content__title col-12">
                                    David Chorvinsky
                                </div>
                                {/*<div className="header__content__subtitle col-auto">*/}
                                {/*(shifting text here)*/}
                                {/*</div>*/}
                            </div>

                            <div className="header__inner__content__arrow">
                                {/*todo: switch to fa-chevron-up if page is small (probably just small)*/}
                                <span
                                    className="header__inner__content__arrow--top  fas fa-chevron-down row col-12"> </span>
                                <span
                                    className="header__inner__content__arrow--middle fas fa-chevron-down row col-12"> </span>
                                <span
                                    className="header__inner__content__arrow--bottom fas fa-chevron-down row col-12"> </span>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="activities">
                    <div className="activities__outer">
                        <div className="activities__inner container-fluid">
                            <div className="container justify-content-center activities__inner__content">
                                <div className="activities__inner__content__opener">
                                    What I Do:
                                </div>
                                <div className="activities__inner__content__title">
                                    Day Job:
                                </div>
                                <div className="activities__inner__content__text">
                                    Product Manager
                                    <span className="activities__inner__content__text--extra"> *</span>
                                </div>
                                <div className="activities__inner__content__title">
                                    After Hours:
                                </div>
                                <div className="activities__inner__content__text">
                                    Chef, Economic Analyst, Small Business Owner, Event Planner
                                </div>
                                <div className="activities__inner__content__title">
                                    Late Night:
                                </div>
                                <div className="activities__inner__content__text">
                                    Dancer, Event Organizer, Consumer of Fine Cuisine and Beverage, Dungeon Master
                                </div>
                                <div className="activities__inner__content__text--reference">
                                    *&#8230;with lot of time spent fulfilling the products as a Front End and UI/UX
                                    Developer doing everything from initial wire frames, user testing, and building
                                    applications to defining specification, managing issue boards, and anything else
                                    that
                                    needs doing.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <div className="projects__outer">
                        <div className="projects__inner container-fluid">
                            <div className="projects__inner__content container justify-content-center">
                                <div className="projects__inner__content__opener">
                                    Personal projects to capture my creative energy, design solutions, and make them
                                    reality. Below are a few of my
                                    active projects:
                                </div>
                                <div className="projects__inner__content__title">
                                    SpkEasy Registration
                                </div>
                                <div className="projects__inner__content__text">
                                    Making up half of Speakeasy Tango's business, this custom registration system is
                                    designed to
                                    effortlessly handle role balancing and schedule creation for organizers while
                                    providing
                                    customers a seamless registration experience.
                                </div>

                                <div className="projects__inner__content__title">
                                    Speakeasy Tango
                                </div>
                                <div className="projects__inner__content__text">
                                    The core purpose of Speakeasy Tango are our events. From small recurring events
                                    hidden
                                    in a DC appartment, to day long <span
                                    className="projects__inner__content__text--italics">minithons,</span> full on
                                    marathons, and festivals. We aim to create events that meet certain criteria:
                                    <ul className="projects__inner__content__text__list">
                                        <li>
                                            They work: where they are and when they are
                                        </li>
                                        <li>
                                            Worth it: before you ever even dance
                                        </li>
                                        <li>
                                            Welcoming: we believe a <span>hello</span> is the right beginning
                                        </li>
                                        <li>
                                            Good: plain and simple
                                        </li>
                                    </ul>
                                </div>

                                <div className="projects__inner__content__title">
                                    Buyer's Guide: Economy Chatbot
                                </div>
                                <div className="projects__inner__content__text">
                                    As a long-time World of Warcraft player and a mathemtics and economy nerd I've been
                                    studying in-game market economics since it's release in 2004. Along
                                    with my friend and coding partner, <a href="https://github.com/Heanthor"
                                                                          className="projects__inner__content__text--link">
                                    Reed Trevelyan</a>, we worked to bring my designs to life. Reed's efforts took the
                                    concept and specifications: an interface to allow users to easily obtain information
                                    on the market value of products and commodities, and produced a Discord chat bot
                                    that any player could add to their server with a few clicks.
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="skills">
                    <div className="skills__outer">
                        <div className="skills__inner container-fluid">
                            <div className="skills__inner__content container justify-content-center">
                                <div className="skills__inner__content__opener">
                                    Below is a sample of some skills I've worked on and the technical skills used on
                                    them:
                                </div>
                                <div className="row skills__inner__content__project">
                                    <div
                                        className="skills__inner__content__project__title skills__inner__content__project__title--unlinked col-12 col-md-6">
                                        DC Data Lake
                                    </div>
                                    <ul className="skills__inner__content__project__list col-12 offset-md-1 col-md-5">
                                        <li className="skills__inner__content__project__list__item">Wire Frames</li>
                                        <li className="skills__inner__content__project__list__item">UI/UX</li>
                                        <li className="skills__inner__content__project__list__item">Logo Design</li>
                                        <li className="skills__inner__content__project__list__item">Front End Dev:
                                            Angular
                                        </li>
                                        <li className="skills__inner__content__project__list__item">HTML, SCSS,
                                            TypeScript
                                        </li>
                                    </ul>
                                </div>
                                <div className="row skills__inner__content__project">
                                    <a className="skills__inner__content__project__title col-12 col-md-6"
                                       href="http://crimecards.dc.gov/">
                                    <span className="skills__inner__content__project__title--link">
                                        DC Crime Cards
                                    </span>
                                    </a>
                                    <ul className="skills__inner__content__project__list col-12 offset-md-1 col-md-5">
                                        <li className="skills__inner__content__project__list__item">Wire Frames</li>
                                        <li className="skills__inner__content__project__list__item">Mock Up</li>
                                        <li className="skills__inner__content__project__list__item">UI/UX</li>
                                        <li className="skills__inner__content__project__list__item">Symbology Design
                                        </li>
                                        <li className="skills__inner__content__project__list__item">Front End Dev:
                                            Angular
                                        </li>
                                        <li className="skills__inner__content__project__list__item">HTML, SCSS,
                                            TypeScript
                                        </li>
                                    </ul>
                                </div>
                                <div className="row skills__inner__content__project">
                                    <a className="skills__inner__content__project__title col-12 col-md-6"
                                       href="http://speakeasytango.com/">
                                    <span className="skills__inner__content__project__title--link"
                                    >
                                        SpkEasy Registration</span>
                                    </a>
                                    <ul className="skills__inner__content__project__list col-12 offset-md-1 col-md-5">
                                        <li className="skills__inner__content__project__list__item">Wire Frames</li>
                                        <li className="skills__inner__content__project__list__item">Mock Up</li>
                                        <li className="skills__inner__content__project__list__item">UI/UX</li>
                                        <li className="skills__inner__content__project__list__item">Front End Dev:
                                            React
                                        </li>
                                        <li className="skills__inner__content__project__list__item">User Testing</li>
                                        <li className="skills__inner__content__project__list__item">HTML, SCSS,
                                            JavaScript
                                        </li>
                                    </ul>
                                </div>
                                <div className="row skills__inner__content__project">
                                    <a className="skills__inner__content__project__title col-12 col-md-6"
                                       href="https://github.com/Heanthor/auctioneer-bot">
                                        <span className="skills__inner__content__project__title--link">
                                            Buyer's Guide: Economy Chatbot
                                        </span>
                                    </a>
                                    <ul className="skills__inner__content__project__list col-12 offset-md-1 col-md-5">
                                        <li className="skills__inner__content__project__list__item">Wire Frames</li>
                                        <li className="skills__inner__content__project__list__item">UI/UX</li>
                                        <li className="skills__inner__content__project__list__item">Python</li>
                                        <li className="skills__inner__content__project__list__item">Economic Analysis
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="contact__outer">
                        <div className="contact__inner container-fluid">
                            <div className="container justify-content-center contact__inner__content">

                                <div className="contact__inner__content__hire">
                                    I'm always looking for interesting projects and teams. If you think I could be a
                                    good
                                    fit for your <a className="contact__inner__content__hire--link"
                                                    href="mailto:d.chorvinsky@gmail.com">
                                    get in touch</a>.
                                </div>
                                <div className="contact__inner__content__follow">
                                    Otherwise feel free to follow my work and check out my and Speakeasy Tango's newest
                                    projects
                                    <div className="row">
                                        <a className="col-12 col-sm-6 contact__inner__content__follow__text"
                                           href="speakeasytango.com">
                                        <span className="contact__inner__content__follow__text--link">
                                            Speakeasy Tango
                                        </span>
                                        </a>
                                        <a className="col-12 col-sm-6 contact__inner__content__follow__text"
                                           href="https://github.com/unlockedsound">
                                        <span className="contact__inner__content__follow__text--link">
                                            Github
                                        </span>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="copy">
                    {/*Speakeasy Tango names and content used with permission of Speakeasy Tango LLC. all rights reserved |*/}
                    {/*Buyer's Guide: Economy Chatbot&#8482; is the property of Reed Trevelyn and David Chorvinsky all*/}
                    {/*rights reserved | All other content and design are sole property of David Chorvinsky all rights*/}
                    {/*reserved*/}
                    <div className="copy__text">
                        All rights reserved | David Chorvinsky | 2019
                    </div>
                </section>

            </div>
        );
    }
}

export default App;
