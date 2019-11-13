import React, {Fragment} from 'react';
import ServiceEdit from './components/ServiceEdit';
import ServiceList from './components/ServiceList';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function RedirectToServices() {
  // console.log('Redirecting...');
  return (
    <Redirect to='/services' />
  )
}

function App() {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={RedirectToServices}/>
        <Route path="/services" exact component={ServiceList}/>
        <Route path="/services/:id" exact component={ServiceEdit} />
      </Router>
    </Fragment>
  );
}

export default App;
