import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button  type='button' id={this.props.id} onClick={()=>this.props.SetCTime({time:this.props.time, id:this.props.id})}> {this.props.time}</button>
    )
  }
}
