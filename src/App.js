import './App.css';
import styled from 'styled-components';
import Home from './components/Home';
import Header from './components/Header';
import React from 'react';
import BottomNavBar from './components/BottomNavBar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './components/Events';
import Blog from './components/Blog';
import Contact from './components/Contact';
import EventIndividual from './components/EventIndividual';
import BlogIndividual from './components/BlogIndividual';
import Visit from './components/Visit';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/tempblog">
            <BlogIndividual />
          </Route>
          <Route path="/temp">
            <EventIndividual />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/visit">
            <Visit />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BottomNavBar />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
`;