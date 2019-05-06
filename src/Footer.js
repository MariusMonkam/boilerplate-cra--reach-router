import React from 'react'
class Footer extends React.Component {
  render () {
    return <div className='message-box'>

      I am the  {this.props.name}
    </div>
  }
}
export default Footer;