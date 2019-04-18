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
                        {/*<div className="fas fa-angle-down header__arrow"></div>*/}
                        <div className="header__arrow">
                            <span className="header__arrow--large  fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow--medium fas fa-chevron-down row col-12"> </span>
                            <span className="header__arrow--small  fas fa-chevron-down row col-12"> </span>
                        </div>
                    </div>
                </section>


                <section className="about">
                    <div className="about__inside container-fluid">
                        <div className="container justify-content-center">
                            <div className="about__title">
                                Day Job:
                            </div>
                            <div className="about__text">
                                Product Management
                                <span className="about__text--extra"> *</span>
                            </div>
                            <div className="about__title">
                                After Hours:
                            </div>
                            <div className="about__text">
                                Chef, Economic Analyst, Small Business Owner, Event Planner
                            </div>
                            <div className="about__title">
                                Late Night:
                            </div>
                            <div className="about__text">
                                Dancer, Event Organizer, Consumer of Fine Cuisine and Beverage, Dungeon Master
                            </div>
                            <div className="about__text__special">
                                * &#8230;with title of UI/UX and Front End Web Developer who does everything from
                                initial wire frames and user testing to building the applications.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="projects">
                    <div className="projects__inside container-fluid">
                        <div className="container justify-content-center">
                            <div className="projects__title">
                                Speakeasy Registration
                            </div>
                            <div className="projects__text">
                                Making up half of Speakeasy Tango's business, this custom registration system is
                                designed to
                                effortless handle role balancing and schedule creation for organizers while allowing
                                customers the a seamless registration experience.
                            </div>

                            <div className="projects__title">
                                SpkEz Tango: Littl'easies, Big'easies, and everything else
                            </div>
                            <div className="projects__text">
                                The core purpose of Speakeasy Tango are our events. From small recurring events hidden
                                in an apartment in D.C., to day long <span
                                className="projects__text--italics">minithons,</span> or eventually full on tango
                                marathons and festivals. We aim to create events that meet certain criteria:
                                <ul>
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
