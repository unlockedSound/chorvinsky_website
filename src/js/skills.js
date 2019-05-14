import React from "react";
import ListComponent from "./components/list";

const listClass = "skills__inner__content__project__list col-12 offset-md-1 col-md-5";

const dataLakeText = ["Front End Dev: Angular", "HTML, SCSS, TypeScript", "Wire Frames", "Logo Design", "UI/UX"];
const crimeCardText= ["Front End Dev: Angular", "HTML, SCSS, TypeScript", "Symbology Design", "Wire Frames", "Mock Ups", "UI/UX"]
const spkezText= ["Front End Dev: React", "HTML, SCSS, JavaScript", "User Testing", "Wire Frames", "Mock Ups", "UI/UX"]
const buyersGuideText = ["Economic Analysis", "Wire Frames", "Python", "UI/UX"]


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
                        <ListComponent
                            listText={dataLakeText}
                            listClass={listClass}
                        />
                    </div>
                    <div className="row skills__inner__content__project">
                        <a className="skills__inner__content__project__title col-12 col-md-6"
                           href="http://crimecards.dc.gov/">
                                    <span className="skills__inner__content__project__title--link">
                                        DC Crime Cards
                                    </span>
                        </a>
                        <ListComponent
                            listText={crimeCardText}
                            listClass={listClass}
                        />
                    </div>
                    <div className="row skills__inner__content__project">
                        <a className="skills__inner__content__project__title col-12 col-md-6"
                           href="http://speakeasytango.com/">
                                    <span className="skills__inner__content__project__title--link"
                                    >
                                        SpkEasy Registration</span>
                        </a>
                        <ListComponent
                            listText={spkezText}
                            listClass={listClass}
                        />
                    </div>
                    <div className="row skills__inner__content__project">
                        <a className="skills__inner__content__project__title col-12 col-md-6"
                           href="https://github.com/Heanthor/auctioneer-bot">
                                        <span className="skills__inner__content__project__title--link">
                                            Buyer's Guide: Economy Chatbot
                                        </span>
                        </a>
                        <ListComponent
                            listText={buyersGuideText}
                            listClass={listClass}
                        />
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default SkillsSection;