// import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  ,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";

// import About from "./../About/About";

import { Navbar, Nav, NavLink } from "react-bootstrap";
import TeamDetail from "./components/TeamDetail/TeamDetail";
import NoMatch from "./components/NoMatch/NoMatch";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header></Header>
       
    

    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <div className="rootHeader">
            <h1 className="head top">World Club Cup 2021 by FIFA</h1>
            {/* <code className="text-uppercase head">
              FIFA
            </code> */}
          </div>

          <Home></Home>
        </Route>
        <Route path="/Home">
          <div className="rootHeader">
            <h1 className="head top">World Club Cup 2021 by FIFA</h1>
            {/* <code className="text-uppercase head">
              FIFA
            </code> */}
          </div>
          <Navbar expand="sm">
            <Navbar.Brand>World Club Cup 2021 by FIFA</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink> </NavLink>
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Home"
                
                  Home
                
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <Home></Home>
        </Route>
        <Route path="/About">
          <Navbar expand="sm">
            <Navbar.Brand>World Club Cup 2021 by FIFA</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <About></About>
        </Route>

        <Route path="/Team/:teamId">
          <Navbar expand="sm">
            <Navbar.Brand>World Club Cup 2021 by FIFA</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <TeamDetail></TeamDetail>
        </Route>

        <Route path="*">
          <Navbar expand="sm">
            <Navbar.Brand>World Club Cup 2021 by FIFA</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#84a52b", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </div>
    
  );
};

export default App;
