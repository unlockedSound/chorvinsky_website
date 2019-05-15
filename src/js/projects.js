import React from "react";
import ListComponent from "./components/list";

const listText = ["They work: where they are and when they are", "Worth it: before you ever even dance", "Welcoming: we believe a hello is the right beginning", "Good: plain and simple"];
const listClass = "projects__inner__content__text__list";

const ProjectsSection = () => (
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

                                <ListComponent
                                    listText={listText}
                                    listClass={listClass}
                                />

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
);

export default ProjectsSection;