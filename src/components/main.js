import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage.js";
import AboutMe from "./aboutMe.js";
import ContactMe from "./contactMe.js";
import Projects from "./projects.js";
import Resume from "./resume.js";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contactMe" component={ContactMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
