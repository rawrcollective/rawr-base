import React, { Component } from 'react';
import './App.css';
import LandingPageComponent from "./components/LandingPage/LandingPageComponent";
import ServiceComponent from "./components/Services/ServiceComponent";
import AboutMeComponent from "./components/AboutMe/AboutMeComponent";
import ResourceComponent from "./components/Resources/ResourceComponent";
import AboutCompanyComponent from "./components/AboutCompany/AboutCompanyComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FullSite from './containers/FullSite';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FullSite />
        {/* <header className="App-header">
          <LandingPageComponent />
        </header>
        <ServiceComponent />
        <AboutMeComponent />
        <ResourceComponent />
        <AboutCompanyComponent />
        <ContactComponent /> */}
      </div>
    );
  }
}

export default App;
