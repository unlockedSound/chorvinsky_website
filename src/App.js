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
                            <span className="header__arrow--large  fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow--medium fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow--small  fas fa-chevron-down row col-12"> </span>
                        </div>
                    </div>
                </section>


                <section className="about">
                    <div className="about__inside container-fluid">
                        <div className="container justify-content-center about__content">
                            <div className="about__content__title">
                                Day Job:
                            </div>
                            <div className="about__content__text">
                                Product Managemener
                                <span className="about__text--extra"> *</span>
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
                                *&#8230;with title of UI/UX and Front End Web Developer who does everything from
                                initial wire frames, user testing, and building applications to defining specification, managing issue boards, and .
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <div className="projects__inside container-fluid">
                        <div className="projects__content container justify-content-center">
                            <div className="projects__content__title">
                                Speakeasy Registration
                            </div>
                            <div className="projects__content__text">
                                Making up half of Speakeasy Tango's business, this custom registration system is
                                designed to
                                effortless handle role balancing and schedule creation for organizers while allowing
                                customers the a seamless registration experience.
                            </div>

                            <div className="projects__content__title">
                                SpkEz Tango
                            </div>
                            <div className="projects__content__text">
                                The core purpose of Speakeasy Tango are our events. From small recurring events hidden
                                in an apartment in D.C., to day long <span
                                className="projects__content__text--italics">minithons,</span> full on
                                marathons, and festivals. We aim to create events that meet certain criteria:
                                <ul className="projects__content__text__list">
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

                            <div className="projects__content__title">
                                Buyer's Guide: Economy Bot
                            </div>
                            <div className="projects__content__text">
                                As a long-time World of Warcraft player and a mathemtics and economy nerd I've been
                                study the in-game market economics of the game since it's release in 2004. Along with my
                                friend and coding partner, <a href="https://github.com/Heanthor"
                                                              className="projects__content__text--link">Reed Trevelyan</a>, we
                                worked to
                                bring my designs to life. Reed's efforts took the concept and specifications: an
                                interface to allow users to esily obtain information on the market value of products and
                                commodities in the game, and produced a Discord chat bot that any player could add to
                                their server with a few clicks.
                            </div>

                        </div>

                    </div>
                </section>

                {/*<div className="projects">*/}
                {/*    <div className="col-12">*/}
                {/*        Between work and hope I tend to keep myself busy with more than a few projects.*/}
                {/*    </div>*/}
                {/*    <div className="projects__dcGov"></div>*/}

                {/*    <div className="projects__spkez"></div>*/}
                {/*    <div className="projects__bg"></div>*/}
                {/*</div>*/}

                {/*<section className="row atc">*/}
                {/*</section>*/}

                {/*<section className="row undergrad">*/}
                {/*</section>*/}

                {/*<section className="row dreamWizards">*/}
                {/*</section>*/}

            </div>
        );
    }
}

export default App;
