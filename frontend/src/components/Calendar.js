import React, { Component } from 'react'
import Calendar from 'react-calendar'

export default class Calendar extends Component {


  render() {


    return (   
        <Calendar onClickDay={this.word}/>
    )
  }

  word(){
    console.log(123)   
  }
}
