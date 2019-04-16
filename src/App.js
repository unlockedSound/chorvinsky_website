import React, {Component} from 'react';
import './App.scss';

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class App extends Component {
    render() {
        return (
            <div className="page">

                <section className="title">
                    <div className="title__inside container justify-content-center">
                        <div className="title__text">
                            <div className="title__text__main col-12">
                                David Chorvinsky
                            </div>
                            <div className="title__text__subtitle col-auto">
                                (shifting text here)
                            </div>
                        </div>
                        {/*<div className="fas fa-angle-down title__arrow"></div>*/}
                        <div className="title__arrow">
                            <div className="title__arrow--large"> Down</div>
                            <div className="title__arrow--medium"> Down</div>
                            <div className="title__arrow--small"> Down</div>
                        </div>
                    </div>
                </section>


                <section
                    className="about">
                    <div
                        className="about__inside container-fluid">
                        <div
                            className="container justify-content-center">
                            <div
                                className="about__title"> Day
                                job:
                            </div>
                            <div className="about__text">Product Management with the title of Front End Dev</div>
                            <div className="about__title"> After hours:</div>
                            <div className="about__text">Chef, Economic Analyst, Small Business Owner, Event Planner
                            </div>
                            <div className="about__title"> Late Night:</div>
                            <div className="about__text"> Dancer, Event Organizer, Dungeon Master</div>
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
