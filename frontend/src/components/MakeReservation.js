import React, { Component } from 'react'
import Calendar from 'react-calendar'
import Button from './time_buttons'
import Axios   from 'axios'


export default class MakeReservation extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: "",
            phone: "",
            count:0,
            data:"",
            time:"",
        }

        this.setChosenTime = this.setChosenTime.bind(this)
        this.send_data = this.send_data.bind(this)
        this.normal_data = this.normal_data.bind(this)
        this.make_reservat = this.make_reservat.bind(this)

    }

        render(){
            return (
                <>
                <main>
                        <form ref={(el) => this.myForm = el} className='form-inline'>
                            <input placeholder='ФИО' id="name" onChange={(e) => this.setState({name: e.target.value})}/>
                            <input placeholder='Телефон' id="phone" onChange={(e) => this.setState({phone: e.target.value})}/>
                            <input placeholder='Колличество участников не больше 5' id="count" onChange={(e) => this.setState({count: e.target.value})}/>
                            <label id='time'>Выбирите время</label>
                            <div className='timeButtons'>
                                {this.generate_buttons()}
                            </div>
                            <button type='button' onClick={this.send_data} id="Main_button">ADD</button>

                            <dialog id="modal">
                                <p>Ваша заявка принета</p>
                                <button id="closeModal">Closel</button>
                            </dialog>
                
                        </form>
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
          }

         generate_buttons(){
            var list_buttons = []

            var id = 1;
            for(let a =  10.50; a <= 20.00; a+=0.50){
                if(Math.floor((a % 1) * Math.pow(10, 2)) === 50)
                    list_buttons.push(<Button time={Math.trunc(a)+":"+30} SetCTime={this.setChosenTime} id={id}/>)
                else
                    list_buttons.push(<Button time={Math.trunc(a)+":00"} SetCTime={this.setChosenTime} id={id}/>)

                id+=1
                
            }

            return list_buttons
         }

         setChosenTime(values){
            var el = document.getElementById("time")
            el.innerHTML = "Вы выбрали следющие время : " + values.time
            this.state.time = values.time
            
            for(var i = 1; i < 21; i++){

                el = document.getElementById(i)
                if(values.id === i){
                    el.style.background ="green"
                    el.color = "white"
                }
                else{
                    el.style.background = "white"
                    el.color = "black"
                }

            }
         }

         send_data(){
            var flags = 0;
            if(this.state.name !== "")
                flags +=1
            else{
                el = document.getElementById("name")
                el.placeholder = "Укажите ФИО"
            }
            if(this.state.phone !== "")
                flags +=1
            else{
                el = document.getElementById("phone")
                el.placeholder = "Укажите свой телефон"
            }

            if(this.state.count > 0 && this.state.count < 6)
                flags +=1

            else{
                el = document.getElementById("count")
                el.value = ""
            }
            if(this.state.data !== ""){
                var date_selected = new Date(this.state.data);
                var data_now = new Date();
                console.log(data_now.getFullYear() +"-"+data_now.getMonth() +"-"+data_now.getDate())
                if(date_selected.getTime() >= data_now.getTime()){

                    flags +=1
                }
            }

            if(this.state.time !== "")
                flags +=1

            var el = document.getElementById("Main_button")

            if(flags === 5){
                el.style.background ="green"
                el.style.color ="white"
                this.make_reservat()
            }

            else{
                el.style.background ="#ff0000"
            }

            // this.make_reservat()
         }


        async make_reservat(){
            Axios.post("http://localhost:3300/", {
                user_info : this.state
            }).then().catch((err)=>console.error(err))

        }

         

}
