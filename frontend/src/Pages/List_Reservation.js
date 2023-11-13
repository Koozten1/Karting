import React, { Component } from 'react'
import Calendar from 'react-calendar'
import Reservations from '../components/Reservations'
import Axios   from 'axios'


class Second extends Component {

  constructor(props){
      super(props)
      this.state ={
          items: [],
          data:""
    }


    this.normal_data = this.normal_data.bind(this)
    this.get_list = this.get_list.bind(this)

}


  render() {

    return (
      <>
        <main>
          <Reservations users={this.state.items}/>
        </main>

        <aside>
          <Calendar onChange={this.normal_data} />
        </aside>
      </>
      
    )
  }

  normal_data(el){
    var day = el.getDate();
    var month = el.getMonth();
    var year = el.getFullYear();

    var normal_data = year+"-"+month+"-"+day

    this.state.data = normal_data
    console.log(this.state.items)
    this.setState({items:[]})
    this.get_list()
  }

  get_list(){
      Axios.post("http://localhost:3300/list_reservation", {date:this.state.data}).then(res=>this.setState({items:res.data.list})).catch((err)=>console.error(err))
      console.log(this.state.items)
  }
}

export default Second 
