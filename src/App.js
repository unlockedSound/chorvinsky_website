import React, {Component} from 'react';
import './App.scss';
import HeaderSection from './js/components/header.js'
import ActivitiesSection from './js/components/activities.js'
import ProjectsSection from './js/components/projects.js'
import SkillsSection from './js/components/skills.js'
import ContactSection from './js/components/contact.js'
import CopyrightSection from './js/components/copyright'

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
