import React, { Component } from 'react'
import './Auth.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer'
// import bootstrap from 'react-bootstrap'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        const {id} = this.props;
        if(id){
            this.props.history.push('/home')
        }else {
            axios.get('/api/user')
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('./home')
            })
        }
    }
    handleChange = (prop, val) => {
        this.setState({ [prop]: val })
    }
    register = () => {
        const {username, password} = this.state;
        axios.post('/auth/register', {username, password})
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('./home')
        })
        .catch(err => {
            console.log(err)
        })
    }
    login = () => {
        const { username, password } = this.state;
        axios.post("/auth/login", { username, password })
            .then(res => {
                console.log(res)
                this.props.updateUser(res.data)
                console.log(this.props.history)
                this.props.history.push("/home")
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        console.log(this.state)
        console.log(this.props)
        // const { username, password } = this.state;
        return (
            <div>
                <h1>CARDKLOUT</h1>
                <div id="Login__parent">
                    <input className="Login__input" type="text" placeholder="Username" 
                    onChange={e => this.handleChange("username", e.target.value)} 
                    />
                    <input className="Login__input" type="password" placeholder="Password" type="password" 
                    onChange={e => this.handleChange("password", e.target.value)} 
                    />
                    <button className="Login__btn" onClick={this.login}>login</button>
                </div>
                <div id="Register__parent">
                    <button onClick={this.register}>REGISTER</button>
                    <p>OR</p>
                    <button>REQUEST WITH FACEBOOK</button>
                    <button>REQUEST WITH GOOGLE</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = reduxState => {
    return {
        id: reduxState.id
    }
}

const dispatch = {
    updateUser
}

export default connect(mapStateToProps, dispatch)(Auth);