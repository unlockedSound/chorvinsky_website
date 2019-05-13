import React from "react";

const SkillsSection = () => (
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
);

export default SkillsSection;