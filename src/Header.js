import React from 'react'
import Navigation from './Navigation';

class Header extends React.Component {
  render () {
    return <div className='message-box'>
      <Navigation/>
      I am the  {this.props.name}
    </div>
  }
}
export default Header;