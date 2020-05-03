import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';
//import Customers from './Customers'
import table from './table'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1 className="App-title">Server Status Dashboard</h1>
          
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/ServerStatus"/>
                )}/>
                 <Route exact path='/ServerStatus' component={table} />
                 <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
