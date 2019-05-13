import React from "react";

const ActivitiesSection = () => (
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
);

export default ActivitiesSection;