import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
// import { showUser } from './../../ducks/reducer'
import Card from './../Card/Card'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersCards: []
        }
    }
    
    componentDidMount(){
        this.fireCards()
    }

    fireCards = () => {
        // console.log('home mounted')
        axios.get('/home/getUserCards')
        .then(res => {
            this.state.usersCards(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        // let displayedCards = this.props.listings.map(card => {
        //     return(
        //         <Card key={this.state.usersCards.id}/>
        //     )
        // })
        return (
            <div>
                <div className="header_container">
                    <h1 className="cardklout_title">CARDKLOUT</h1>
                    {/* <br></br> */}
                    <input className="search_bar"/>
                <button className="AddCard_button"><Link style={{textDecoration: 'none', color: 'rgb(27, 144, 221)', fontSize: '18px'}}to="/addcard">ADD CARD</Link></button>
                </div>
                    <h1 className="under_title">Powerful Card Analysis Tool</h1>
            <Card />
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {user} = state
    return {
        user
    }
}

export default connect(mapStateToProps, {})(Home);