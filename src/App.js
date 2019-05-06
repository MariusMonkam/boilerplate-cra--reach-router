import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from '@reach/router';
import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

import Footer from './Footer';

class App extends React.Component {
  render () {
    return(<div className="text-center">
        <Router>
          
          <Header path='/header' name='header' />
         
          
             <Component1  path='/component1' name='component1' />
         
          
        <Component2 path='/component2' name='component2' />
         
          
        <Component3 path='/component3'name='component2' />
       
          
        <Footer path='/footer' name='footer' />
        
        </Router>
        
    </div>
    )

  }
}


export default App;

