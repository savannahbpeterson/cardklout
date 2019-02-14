import React, { Component } from 'react'
import './Auth.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer'
import bootstrap from 'react-bootstrap'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        const { id } = this.props;
        if (id) {
            this.props.history.push('/home')
        } else {
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
    // register = () => {
    //     const {username, password} = this.state;
    //     axios.post('/auth/register', {username, password})
    //     .then(res => {
    //         this.props.updateUser(res.data)
    //         this.props.history.push('./home')
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }
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
                {/* <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
                <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css"/>
                <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>
                <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
                <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css"/>
                <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
                <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css"/> */}
                <body style={{ marginTop: 150, marginLeft: 40 }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div style={{ textAlign: 'center', fontSize: '60px', display: 'inline' }}><b>CARDKLOUT</b></div>
                                <div class="card" style={{ marginLeft: '-180px', width: '720px', backgroundColor: 'rgb(116, 117, 119)' }}>
                                    <div class="card-body col-md-5" style={{ marginBotton: '50px', marginLeft: '35px' }}>
                                        <label for="" style={{ fontSize: '20px', color: 'white', }}><b>Login</b></label>
                                        <form style={{ marginTop: '25px' }}>

                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Username/Email" onChange={e => this.handleChange("username", e.target.value)}/>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control" placeholder="Password" onChange={e => this.handleChange("password", e.target.value)}/>
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                                                    <label class="custom-control-label" for="customControlAutosizing" style={{ color: 'white' }}>Keep Me Signed in</label>
                                                </div>
                                            </div>
                                            <button type="submit" 
                                                    class="btn btn-success btn-block" 
                                                    style={{ marginTop: '10px', color: 'white', width: '70px',
                                                    backgroundColor: 'black', border: 0, backgroundColor: 'rgb(27, 144, 221)' }} 
                                                    onClick={this.login}>LOG IN</button>
                                        </form>
                                    </div>
                                </div>
                                <div style={{ marginLeft: 50, marginTop: -320, width: 2, height: 290 }}></div>
                                <div class="col-md-5">
                                    {/* <p style={{ color: 'white' }}>If you dont't have  an account click the button below to request an account.</p> */}
                                    <button type="button" class="btn btn-outline-primary btn-block" style={{ marginTop: 10, color: 'white', backgroundColor: 'black', border: 0 }}>REQUEST ACCOUNT</button>
                                    <p style={{ textAlign: 'center', marginTop: '15px', color: 'white' }}>OR</p>
                                    <div class="mt-4 text-center login-with-social" style={{ marginBottom: '50px' }}>
                                        <button type="button" class="btn btn-outline-primary btn-block" style={{color: 'white', backgroundColor:'rgb(27, 82, 233)'}}><i class="mdi mdi-facebook"></i> Login With Facebook</button>
                                        <button type="button" class="btn btn-outline-danger btn-block" style={{color:'white', backgroundColor:'red'}}><i class="mdi mdi-google-plus"></i> Login With Google</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card" style={{marginLeft:'-180px', marginTop:'-10px', width: '720px', height:'80px', backgroundColor: 'lightgray'}}>
                            <p style={{marginTop:'20px', marginLeft:'20px'}}>Can't get in to your account? Did you forget your password?</p>
                            </div>
                        </div>
                    </div>
                </body>
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