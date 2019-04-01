import React, {Component} from 'react';
import './App.scss';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class App extends Component {
    render() {
        return (
            <div className="page">

                <section className="title">
                    <div className="title__text row justify-content-center">
                        <div className="title__text__main col-11 offset-1">
                            David Chorvinsky
                        </div>
                        <div className="title__text__subtitle col-auto">
                            (shifting text here)
                        </div>
                    </div>
                    <i className="fas fa-angle-down title__arrow"></i>
                    <i className="fas fa-angle-down title__arrow"></i>
                </section>

                <section className="row">
                    <div className="about">
                        With a deep passion for design and "creating" everything from web applications and
                        virtual economy analyses to events or calligraphy I find myself always working on
                        something.
                        This mix of passions, both digital and physical, lead me to learn about many things and
                        from
                        many wonderful people. Through the osmosis of information from so many sources I found
                        myself
                        naturally drawn to the role of Product Manager for both my career and personal projects,
                        working
                        with teams and friends, to create things we can proud of.
                    </div>
                </section>

                <div className="projects">
                    <div className="col-12">
                        Between work and hope I tend to keep myself busy with more than a few projects.
                    </div>
                    <div className="projects__dcGov"></div>

                    <div className="projects__spkez"></div>
                    <div className="projects__bg"></div>
                </div>

                <section className="row atc">
                </section>

                <section className="row undergrad">
                </section>

                <section className="row dreamWizards">
                </section>

            </div>
        );
    }
}

export default App;
