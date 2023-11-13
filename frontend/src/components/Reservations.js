import React, { Component } from 'react'
import Resevation from './Reservation'


class Reservations extends Component {
    constructor(props){
        super(props)
        this.state = {
            key:0
        }
    }
    
    render() {
        if(this.props.users.length > 0)
            return (<div>
                {this.props.users.map((el, i = 0)=> (
                    this.chengkey(el, i += 1)
                
                ))}
            </div>)
        else
        return(<div className='user'><h3>Никто не записан</h3></div>)
    }

    chengkey(el, key){
       return <Resevation user={el} key={key}/>
    }

}

export default Reservations