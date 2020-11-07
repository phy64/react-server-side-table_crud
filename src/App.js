import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AdminList, Admin, Error } from './pages';

function App () {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <nav className="navbar navbar-expand navbar-dark bg-dark" style={{minWidth: '1140px'}}>
        <a href={`${process.env.PUBLIC_URL}/`} className="navbar-brand">
          REACT CRUD
        </a>
      </nav>
      <div className="container mt-3" style={{width: '1140px', maxWidth: 'none'}}>
        <Switch>
          <Route exact path={["/", "/admin"]} component={AdminList}/>
          <Route exact path="/admin" component={AdminList}/>
          <Route exact path="/admin/new" component={Admin}/>
          <Route exact path="/admin/:id" component={Admin}/>
          <Route exact path="/error" component={Error}/>
          <Redirect to="/error" />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
