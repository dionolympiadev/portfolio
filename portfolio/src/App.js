import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Dion Olympia" scroll>
          <Navigation>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/resume.pdf">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Header>
        <Drawer title="Dion Olympia">
          <Navigation>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contactMe">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
