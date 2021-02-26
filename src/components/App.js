import React, { Component } from "react";
import { Container, Nav, Button } from "./styled-components";

import UserImg from "../assets/images/avatar.svg";
import PieChart from "../assets/images/piechart-sectors.jpg";
import LineChart from "../assets/images/line-chart.jpg";
import { onClickPlay, onClickPause, onClickStop } from "./handlers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { redirectRoutes } from "../router";
class App extends Component {
  componentDidMount() {
    const redirectRouteComponents = redirectRoutes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={route.render}
      />
    ));
    const App = () => <Router>{redirectRouteComponents}</Router>;
  }

  render() {
    return (
      <Container>
        {/* static navbar - top */}
        <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
          <Container className="navbar-brand h1 mb-0 text-large font-medium">
            Disabled People Portfolio Management
          </Container>
          <Container className="navbar-nav ml-auto">
            <Container className="user-detail-section">
              <span className="pr-2">Hi, User</span>
              <span className="img-container">
                <img src={UserImg} alt="user" />
              </span>
            </Container>
          </Container>
        </Nav>

        {/* static navbar - bottom */}
        <Nav className="navbar fixed-top nav-secondary is-dark is-light-text">
          <Container className="text-medium">Forecasts and KPIs</Container>
          <Container className="navbar-nav ml-auto"></Container>
        </Nav>

        {/* content area start */}
        <Container className="container-fluid pr-5 pl-5 pt-5 pb-5">
          <Container className="row" style={{ minHeight: "400px" }}>
            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                  <img
                    src={PieChart}
                    alt="pie-chart"
                    style={{ paddingLeft: "80px", maxHeight: "500px" }}
                  />
                </Container>
              </Container>
            </Container>
            <Container className="col-md-6 mb-4 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    <span className="text-large pr-1">Chart Description</span>
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1" id="article">
                    The pie chart depicts 'Sector diversification'. It has 10
                    parts (Energy distribution, Energy generation, Energy
                    storage, Environment, Global transportation, Local
                    transportation, Renewable energy, Strorage facilities,
                    Telecommunication, Transportation related activities) to it
                    and percentage for each are Energy distribution - 16%,
                    Energy generation - 2%, Energy storage - 5%, Environment -
                    6%, Global transportation - 10%, Local transportation - 20%,
                    Renewable energy - 16%, Strorage facilities - 10%,
                    Telecommunication - 8%, Transportation related activities -
                    7%. (All estimate values).
                  </span>
                  <div>
                    <Button primary id="play" onClick={onClickPlay}>
                      Play
                    </Button>
                    <Button primary id="pause" onClick={onClickPause}>
                      Pause
                    </Button>
                    <Button primary id="stop" onClick={onClickStop}>
                      Stop
                    </Button>
                  </div>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container className="row" style={{ minHeight: "400px" }}>
            <Container className="col-md-6 mb-4">
              <Container className="card is-card-dark chart-card">
                <Container className="chart-container large full-height">
                  <img
                    src={LineChart}
                    alt="pie-chart"
                    style={{ maxWidth: "570px", maxHeight: "500px" }}
                  />
                </Container>
              </Container>
            </Container>
            <Container className="col-md-6 mb-4 col-sm-6 is-light-text mb-4">
              <Container className="card grid-card is-card-dark">
                <Container className="card-heading">
                  <Container className="is-dark-text-light letter-spacing text-small">
                    <span className="text-large pr-1">Chart Description</span>
                  </Container>
                </Container>

                <Container className="card-value pt-4 text-x-large">
                  <span className="text-large pr-1" id="">
                    The pie chart depicts 'Sector diversification'. It has 10
                    parts (Energy distribution, Energy generation, Energy
                    storage, Environment, Global transportation, Local
                    transportation, Renewable energy, Strorage facilities,
                    Telecommunication, Transportation related activities) to it
                    and percentage for each are Energy distribution - 16%,
                    Energy generation - 2%, Energy storage - 5%, Environment -
                    6%, Global transportation - 10%, Local transportation - 20%,
                    Renewable energy - 16%, Strorage facilities - 10%,
                    Telecommunication - 8%, Transportation related activities -
                    7%. (All estimate values).
                  </span>
                  <div>
                    <Button primary id="">
                      Play
                    </Button>
                    <Button primary id="">
                      Pause
                    </Button>
                    <Button primary id="">
                      Stop
                    </Button>
                  </div>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
        {/* content area end */}
      </Container>
    );
  }
}

export default App;
