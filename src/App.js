import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="page">
                <div className="container">

                    <div className="title">
                        <div className="title__text row justify-content-center">
                            <div className="title__text__main col-11 offset-1">
                                David Chorvinsky
                            </div>
                            <div className="title__text__subtitle col-auto">
                                (shifting text here)
                            </div>
                        </div>
                    </div>

                    <div className="row about">
                        With a deep passion for design and "creating" everything from web applications and
                        virtual economy analyses to events or calligraphy I find myself always working on something.
                        This mix of passions, both digital and physical, lead me to learn about many things and from
                        many wonderful people. Through the osmosus of information from so many sources I found myself
                        naturally drawn to the role of Product Manager for both my career and personal projects, working
                        with teams and friends, to create things we can proud of.
                    </div>

                    <div className="row dcGov">
                        <div className="dcGov__description"></div>
                        <div className="dcGov__projects">
                            <div className="dcGov__projects__cards">data cards and crime cards</div>
                            <div className="dcGov__projects__lake">data lake</div>
                            <div className="dcGov__projects__etc">other projects</div>
                        </div>
                    </div>

                    <div className="row spkezTango">
                        <div className="spkezTango__projects">
                            <div className="spkezTango__projects__business">the business</div>
                            <div className="spkezTango__projects__reg">reg system</div>
                            <div className="spkezTango__projects__design">design work</div>
                            <div className="spkezTango__projects__events">events</div>
                        </div>
                    </div>

                    <div className="row auctionBot">
                    </div>

                    <div className="row atc">
                    </div>

                    <div className="row undergrad">
                    </div>

                    <div className="row dreamWizards">
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
