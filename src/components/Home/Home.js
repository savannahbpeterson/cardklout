import React, { Component } from 'react'
// import { connect } from 'react-redux'
import axios from 'axios'
// import { updateUser } from './../../ducks/reducer'
import {Link} from 'react-router-dom'
// import routes from './../../routes'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersCards: []
        }
    }
    
componentDidMount(){
    axios.get('/home/getUsersCards').then(res => {
        this.setState=({userCards: res.data})
    })
}
    render() {
        return (
            <div>
                <div className="header_container">
                    <h1 className="cardklout_title">CARDKLOUT</h1>
                    {/* <br></br> */}
                    <input className="search_bar"/>
                <button className="AddCard_button"><Link to="/addcard">ADD CARD</Link></button>
                </div>
                    <h1 className="under_title">Powerful Card Analysis Tool</h1>
            </div>
        )
    }
}

export default Home;