import React, { Component } from 'react'

export default class Reservation extends Component {
    user = this.props.user
    render() {
    return (
        <div className='user'>
        <h3>{this.user.time}</h3>
        <p>ФИО:   {this.user.name} Телефон:    {this.user.phone}</p>
        <p>Колличество участников: {this.user.count_person}</p>
        </div>
    )
  }
}
