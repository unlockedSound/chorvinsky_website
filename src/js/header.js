import React from "react";

const HeaderSection = () => (
    <section className="header">
                <div className="header__outer">
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
);

export default HeaderSection;