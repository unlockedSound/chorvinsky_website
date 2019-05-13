import React, {Component} from 'react';
import './App.scss';
import HeaderSection from './js/header.js'
import ActivitiesSection from './js/activities.js'
import ProjectsSection from './js/projects.js'
import SkillsSection from './js/skills.js'
import ContactSection from './js/contact.js'
import CopyrightSection from './js/copyright'

// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class App extends Component {

    render() {
        return (
            <div className="page">
                <HeaderSection/>
                <ActivitiesSection/>
                <ProjectsSection/>
                <SkillsSection/>
                <ContactSection/>
                <CopyrightSection/>
            </div>
        );
    }
}

export default App;
