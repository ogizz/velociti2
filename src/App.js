import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/css/bootstrap.min.css"
import "./assets/scss/paper-kit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";


import React from 'react'

//import Formpop from './components/Formpop' 
import NavBar from './components/NavBar'
//import NavBar2 from './components/NavBar2'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

//import Services from './components/Services'

import Homescreen from './screens/HomeScreen'
import VehiclesScreen from './screens/VehiclesScreen';
import Footer from './components/Footer'
//import AboutUs from './pages/AboutUs';



const App = () => {
  document.title = "Velociti"
  return (

    <Router basename={process.env.PUBLIC_URL} >
      <Container className="p-0" fluid={true}>
        <NavBar />
        <div>
          <Switch>

            <Route path="/" exact render={() => <Homescreen title={"This is Home Page"} />} />
            <Route path="/vehicles" render={() => <VehiclesScreen title={"Vehicle Page"} />} />

          </Switch>
        </div>

        <Footer />
      </Container>
    </Router>


  );
}

export default App;
