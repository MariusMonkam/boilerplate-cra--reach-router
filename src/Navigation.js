import React, { Component } from 'react';
import {Router,Link } from '@reach/router';


class Navigation extends Component {
  render() {
    

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
        <Router>
          <Link to="/" className="navbar-brand">
             Brand logo
          </Link>
          <div className="navbar-nav ml-auto">
          
              <Link className="nav-item nav-link" to="/header">
                Header
              </Link>
        
           
              <Link className="nav-item nav-link" to="/component1">
                Component1
              </Link>
        
            
              <Link className="nav-item nav-link" to="/component2">
              component2
              </Link>
         
              <Link className="nav-item nav-link" to="/component3">
                component3
              </Link>
           
              <Link
                className="nav-item nav-link"
                to="/footer">
                Footer
              </Link>
          
          </div>
          </Router>
        </div>
      </nav>
    );
  }
}

export default Navigation;