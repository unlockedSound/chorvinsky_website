import React, {Component} from 'react';
import './App.scss';

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class App extends Component {
    render() {
        return (
            <div className="page">

                <section className="header">
                    <div className="header__inside container justify-content-center">
                        <div className="header__text">
                            <div className="header__text__main col-12">
                                David Chorvinsky
                            </div>
                            {/*<div className="header__text__subtitle col-auto">*/}
                            {/*(shifting text here)*/}
                            {/*</div>*/}
                        </div>

                        <div className="header__arrow">
                            {/*todo: switch to fa-chevron-up if page is small (probably just small)*/}
                            <span className="header__arrow  fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow fas fa-chevron-down row col-12"> </span>
                        </div>
                    </div>
                </section>


                <section className="about">
                    <div className="about__inside container-fluid">
                        <div className="container justify-content-center about__content">
                            <div className="about__content__opener">
                                What I Do:
                            </div>
                            <div className="about__content__title">
                                Day Job:
                            </div>
                            <div className="about__content__text">
                                Product Manager
                                <span className="about__content__text--extra"> *</span>
                            </div>
                            <div className="about__content__title">
                                After Hours:
                            </div>
                            <div className="about__content__text">
                                Chef, Economic Analyst, Small Business Owner, Event Planner
                            </div>
                            <div className="about__content__title">
                                Late Night:
                            </div>
                            <div className="about__content__text">
                                Dancer, Event Organizer, Consumer of Fine Cuisine and Beverage, Dungeon Master
                            </div>
                            <div className="about__content__text__special about__content__text__special--extra">
                                *&#8230;with lot of time spent fulfilling the products as a Front End and UI/UX
                                Developer doing everything from initial wire frames, user testing, and building
                                applications to defining specification, managing issue boards, and anything else that
                                needs doing.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="personal">
                    <div className="personal__inside container-fluid">
                        <div className="personal__content container justify-content-center">
                            <div className="personal__content__opener">
                                Personal projects capture creative energy to build solutions. Below are a few of my
                                active projects:
                            </div>
                            <div className="personal__content__title">
                                SpkEasy Registration
                            </div>
                            <div className="personal__content__text">
                                Making up half of Speakeasy Tango's business, this custom registration system is
                                designed to
                                effortless handle role balancing and schedule creation for organizers while allowing
                                customers the a seamless registration experience.
                            </div>

                            <div className="personal__content__title">
                                Speakeasy Tango
                            </div>
                            <div className="personal__content__text">
                                The core purpose of Speakeasy Tango are our events. From small recurring events hidden
                                in an apartment in D.C., to day long <span
                                className="personal__content__text--italics">minithons,</span> full on
                                marathons, and festivals. We aim to create events that meet certain criteria:
                                <ul className="personal__content__text__list">
                                    <li>
                                        They work, where they are and when they are
                                    </li>
                                    <li>
                                        Worth it, before you ever even dance
                                    </li>
                                    <li>
                                        Welcoming, we believe a <span>hello</span> is the right beginning
                                    </li>
                                    <li>
                                        Good, plain and simple
                                    </li>
                                </ul>
                            </div>

                            <div className="personal__content__title">
                                Buyer's Guide: Economy Chatbot
                            </div>
                            <div className="personal__content__text">
                                As a long-time World of Warcraft player and a mathemtics and economy nerd I've been
                                study the in-game market economics of the game since it's release in 2004. Along with my
                                friend and coding partner, <a href="https://github.com/Heanthor"
                                                              className="personal__content__text--link">Reed
                                Trevelyan</a>, we
                                worked to
                                bring my designs to life. Reed's efforts took the concept and specifications: an
                                interface to allow users to esily obtain information on the market value of products and
                                commodities in the game, and produced a Discord chat bot that any player could add to
                                their server with a few clicks.
                            </div>

                        </div>

                    </div>
                </section>

                <section className="projects">
                    <div className="projects__inside container-fluid">
                        <div className="projects__content container justify-content-center">
                            <div className="projects__content__opener">
                                Below is a sample of some projects I've worked on and the technical skills used on them:
                            </div>
                            <div className="row projects__content__work">
                                <div className="projects__content__work__title projects__content__work__title--unlinked col-12 col-md-6">
                                    DC Data Lake
                                </div>
                                <ul className="projects__content__skill__list col-12 offset-md-1 col-md-5">
                                    <li className="projects__content__skill">Wire Frames</li>
                                    <li className="projects__content__skill">UI/UX</li>
                                    <li className="projects__content__skill">Logo Design</li>
                                    <li className="projects__content__skill">Front End Dev: Angular</li>
                                    <li className="projects__content__skill">HTML, SCSS, TypeScript</li>
                                </ul>
                            </div>
                            <div className="row projects__content__work">
                                <a className="projects__content__work__title col-12 col-md-6" href="http://crimecards.dc.gov/">
                                    <span className="projects__content__work__title--link">
                                        DC Crime Cards
                                    </span>
                                </a>
                                <ul className="projects__content__skill__list col-12 offset-md-1 col-md-5">
                                    <li className="projects__content__skill">Wire Frames</li>
                                    <li className="projects__content__skill">Mock Up</li>
                                    <li className="projects__content__skill">UI/UX</li>
                                    <li className="projects__content__skill">Symbology Design</li>
                                    <li className="projects__content__skill">Front End Dev: Angular</li>
                                    <li className="projects__content__skill">HTML, SCSS, TypeScript</li>
                                </ul>
                            </div>
                            <div className="row projects__content__work">
                                <a className="projects__content__work__title col-12 col-md-6" href="http://speakeasytango.com/">
                                    <span className="projects__content__work__title--link"
                                       >
                                        SpkEasy Registration</span>
                                </a>
                                <ul className="projects__content__skill__list col-12 offset-md-1 col-md-5">
                                    <li className="projects__content__skill">Wire Frames</li>
                                    <li className="projects__content__skill">Mock Up</li>
                                    <li className="projects__content__skill">UI/UX</li>
                                    <li className="projects__content__skill">Front End Dev: React</li>
                                    <li className="projects__content__skill">User Testing</li>
                                    <li className="projects__content__skill">HTML, SCSS, JavaScript</li>
                                </ul>
                            </div>
                            <div className="row projects__content__work">
                                <a className="projects__content__work__title col-12 col-md-6" href="https://github.com/Heanthor/auctioneer-bot">
                                        <span className="projects__content__work__title--link">
                                            Buyer's Guide: Economy Chatbot
                                        </span>
                                </a>
                                <ul className="projects__content__skill__list col-12 offset-md-1 col-md-5">
                                    <li className="projects__content__skill">Wire Frames</li>
                                    <li className="projects__content__skill">UI/UX</li>
                                    <li className="projects__content__skill">Python</li>
                                    <li className="projects__content__skill">Economic Analysis</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="contact">
                    <div className="contact__inside container-fluid">
                        <div className="container justify-content-center contact__content">

                            <div className="contact__content__hire">
                                I'm always looking for interesting projects and teams. If you think I could be a good
                                fit for your <a className="contact__content__hire--link" href="mailto:d.chorvinsky@gmail.com">
                                get in touch</a>.
                            </div>
                            <div className="contact__content__follow">
                                Otherwise feel free to follow my work and check out my and Speakeasy Tango's newest projects
                                <div className="row">
                                    <a className="col-12 col-sm-6 contact__content__follow__link" href="speakeasytango.com">
                                        <span className="contact__content__follow__link__text">
                                            Speakeasy Tango
                                        </span>
                                    </a>
                                    <a className="col-12 col-sm-6 contact__content__follow__link" href="https://github.com/unlockedsound">
                                        <span className="contact__content__follow__link__text">
                                            Github
                                        </span>
                                    </a>

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
