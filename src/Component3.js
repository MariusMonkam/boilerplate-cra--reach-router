import React from 'react'
class Component3 extends React.Component {
  render () {
    return <div className='message-box'>

      I am the  {this.props.name}
    </div>
  }
}
export default Component3;