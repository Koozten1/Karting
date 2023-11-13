import React from 'react';
import Header from './components/Header';
import 'react-calendar/dist/Calendar.css';
import './css/main.css'

// import Home from './components/Home'
// import Second from './components/Second';
// // import Users from './components/Users';
// // import AddUser from './components/AddUser';


import axios from "axios"
// import Home  from './components/Home'


const baseUrl = "https://reqres.in/api/users?page=1"





class App extends React.Component{
    constructor(props){
        super(props)

        axios.get(baseUrl).then((res)=>{
           this.setState({users: res.data.data})
        })
        this.state ={
            users: []
        }
        // this.addUser = this.addUser.bind(this)
        // this.deleteUser = this.deleteUser.bind(this)
    }

    render() {
        return (
        <>
            <Header/>
        </>)
    }

    // deleteUser(id){
    //     this.setState({
    //         users: this.state.users.filter((el) => el.id !== id)
    //     })
    // }

    // addUser(user){
    //     const id = this.state.users.length + 1
    //     this.setState({users: [...this.state.users, {id, ...user}] })
    // }   

}


export default App
