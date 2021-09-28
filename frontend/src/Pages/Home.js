import {BrowserRouter as Router, Switch,Route}from 'react-router-dom'
import Crops from '../components/Crops';
import PredictionForm from './predictionform';
  export default function Home() {
    
    return (
      <Router>
        <>
        <Switch>
            <Route path="/home" exact component={Crops}/>
            <Route path="/predictionform" exact component={PredictionForm}/>
      </Switch>
      </>
      </Router>
    );
    }
  