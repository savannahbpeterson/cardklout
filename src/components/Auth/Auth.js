import React, { Component } from 'react'
import './Auth.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer'
// import bootstrap from 'react-bootstrap'

const styles = {
    bg: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "-webkit-fill-available",
    },
    title: {
        fontSize: 40,
        // margin: 0,
        fontWeight: 700,
        fontFamily: 'sans-serif'
    },
    bgLayer: {
        background: '#404040',
        display: 'flex',
        padding: 0,
        height: 240 
    },
    bgLayerTitle: {
        color: '#f2f2f2',
        fontSize: 20,
        textAlign: 'left',
        marginTop: '9%',
        marginLeft: '9%',
        marginRight: '9%'
    },
    formGroup: {
        marginLeft: '9%',
        marginRight: '9%',
        marginBottom: '9%',
        paddingTop: 3,
        paddingBottom: 3
    },
    btn: {
        width: '100%',
        paddingTop: 3,
        paddingBottom: 3
    },
    checkBox: {
        textAlign: 'left',
        color: 'white',
        display: 'flex',
        paddingBottom: 16
    },
    textTitle: {
        color: '#f2f2f2',
        marginTop: '9%',
        marginLeft: '9%',
        marginRight: '9%'
    },
    formBtn: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '10%'
    },
    facebookBtn: {
        width: '100%',
        background: '#4d79ff',
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 10,
        fontSize: 12
    },
    googleBtn: {
        width: '100%',
        background: '#ff1a1a',
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 12,
        marginTop: 13
    },
    accountBtn: {
        width: '100%',
        background: '#0d0d0d',
        border: 0,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 70,
        fontSize: 12
    },
    divide: {
        color: '#ffffff',
        paddingTop: 10,
        paddingBottom: 1
    },
    footer: {
        background: '#e7e7e7',
        textAlign: 'left',
    },
    footerTxt: {
        padding: 20
    }
}


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
                this.props.updateUser(res.data)
                this.props.history.push("/home")
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-12" style={styles.bg}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 mobile" style={{textAlign: 'center'}}>
                        <div style={{display: 'block'}}>
                            <p className="title" style={styles.title}>CARDKLOUT</p>
                        </div>
                        <div className="col-sm-12 mobileForm" style={styles.bgLayer}>
                            <div className="col-sm-6 form1" style={{borderRight: '1px solid #ffffff'}}>
                                <p style={styles.bgLayerTitle}>Login</p>
                                <form style={styles.formGroup}>
                                    <div className="form-group">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="USERNAME/EMAIL" style={{height: '5vh'}} onChange={e => this.handleChange("username", e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="PASSWORD" style={{height: '5vh'}} onChange={e => this.handleChange("password", e.target.value)}/>
                                    </div>
                                    <div className="form-check" style={styles.checkBox}>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label style={{fontSize: 12}} className="form-check-label" htmlFor="exampleCheck1">keep me signed in</label>
                                    </div>
                                    <button type="button" style={styles.btn} className="btn btn-primary" onClick={this.login}>LOG IN</button>
                                </form>
                            </div>
                            <div className="col-sm-6 form2">
                                <form style={styles.formBtn}>
                                    <button type="button" style={styles.accountBtn} className="btn btn-primary">REQUEST ACCOUNT</button>
                                    <label style={styles.divide}>OR</label>
                                    <button type="button" style={styles.facebookBtn} className="btn btn-primary">REQUEST WITH FACEBOOK</button>
                                    <button type="button" style={styles.googleBtn} rsclassName="btn btn-primary">REQUEST WITH GOOGLE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
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