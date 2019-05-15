import React from "react";

const ContactSection = () => (
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
);

export default ContactSection;