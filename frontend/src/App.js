import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import Header from './components/Header'
import About from './Pages/About'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom'
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import ProtectedRoute from './protectedRoute';
import PredictionForm from './Pages/predictionform';
import Result from './components/result';
import React from 'react';

const colors={
  brand:{
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600:" #008000",
  },
}
const result ={
  "prediction": 0
}
export const resultContext = React.createContext(result);
const theme = extendTheme({ colors })
function App() {
  return (
    <resultContext.Provider value={Result}>

    

      <ChakraProvider theme={theme}>
         <Router>
        <div>
            <Header/> 
            
            <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/result" component={Result} />
            <Route path="/signin" exact component={LoginForm}/>
            <Route path="/register" exact component={RegistrationForm}/>
            <ProtectedRoute path="/home" exact component={Home}/>
            <Route path="/about" component={About}/>
            <ProtectedRoute path="/predictionform" component={PredictionForm}/>
            
           
          
            </Switch>
            
        </div>
        </Router>
      </ChakraProvider>
      </resultContext.Provider> 
  );
}

export default App;
