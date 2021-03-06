import React, { Component } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CardModal from './Modal/CardModal'
import {clearUser} from "./../../ducks/reducer"

const styles = {
    logoTxt: {
        display: 'flex',
        fontSize: '2.6vw',
        fontWeight: 700,
        color: '#000000',
        fontFamily: 'sans-serif'
    },
    btn: {
        boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)",
        background: '#e7e7e7',
        fontSize: '1.3vw',
        color: '#1aa3ff',
        fontWeight: 600,
        padding: '5px 15px',
        // textDecoration: 'none'
    },
    headerTxt: {
        fontSize: 30,
        fontWeight: 400,
        color: '#d9d9d9',
        fontFamily: 'sans-serif',
        lineHeight:0,
        padding: 0
    },
    trashcan: {
        border: 'none',
        color: '#696969',
        fontSize: 20,
        curser: 'pointer'
    }
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usersCards: [],
            showCardModal: false,
            modalCard: {},
            editMode: false,
            text: ''
        }
    }
    
    componentDidMount(){
        this.fireCards()
    }

    toggleCardModal = (i) => {
        let modalCard = this.state.usersCards[i]
        this.setState({showCardModal: !this.state.showCardModal, modalCard})
    }

    fireCards = () => {
        axios.get('/home/getUserCards')
        .then(res => {
            this.setState({usersCards: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }


    deleteCard = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then(res => {
            this.setState({
                usersCards: res.data
            })
        })
    }



    editCard = (id) => {
        let textObj = {
            text: this.state.text
        }
        this.setState({editMode: !this.state.editMode})
        axios.put(`/home/edit` + id, textObj)
        .then(response => {
            this.setState({usersCards: response.data})
        }
    )}

    editName(text){
        this.setState({text: text})
    }


    logout = () => {
        axios
          .post("/auth/logout")
          .then(res => {
            this.props.clearUser();
            this.props.history.push("/");
          })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
        const mapOverCards = this.state.usersCards.map((item, index) => {
            return(
                <div onClick={()=> this.toggleCardModal(index)} style={{textDecoration: 'none', color: '#8c8c8c'}} key={index}>
                    <tr style={{border: '0px'}}>
                        <td style={{color: '#1aa3ff', cursor: 'pointer', fontSize: 30}}>{item.card_id}</td>
                        <td style={{fontSize: 20}}>{item.player_name}</td>
                        <td style={{fontSize: 20}}>{item.sport}</td>
                        <td style={{fontSize: 20}}>{item.year}</td>
                        <td style={{fontSize: 19}}>{item.team}</td>
                        <td style={{fontSize: 20}}>{item.position}</td>
                        <td style={{fontSize: 18}}>{item.brand}</td>
                        <td style={{fontSize: 20}}>{item.condition}</td>
                        <td style={{fontSize: 20}}>{item.clout}
                             {
                                item.clout < 50 &&
                                <i style={{color: '#cc0000'}}
                                className="fas fa-arrow-from-top"></i>
                            }
                            {
                                item.clout >= 50 &&
                                <i style={{color: '#00b300'}} className="fas fa-arrow-from-bottom"></i>
                            }
                            <button onClick={e => {
                                e.stopPropagation()
                                this.deleteCard(item.card_id)
                            }} style={styles.trashcan} type="button" class="btn btn-default btn-sm">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>

                            <button onClick={e => {e.stopPropagation() 
                            this.editCard(item.card_id)
                            }} style={styles.trashcan} type="button" class="btn btn-default btn-sm">
                               <span class="glyphicon glyphicon-pencil"></span>
                            </button>
                        </td>
                        </tr>
                </div>
            )
        })
    
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                {this.state.showCardModal &&
                    <CardModal toggleCardModal={this.toggleCardModal} modalCard={this.state.modalCard}/>
                }
            <div style={{height: 150}}>
                <div className="container-fluid" style={{position: 'fixed', padding: 0}}>
                    <div className="row" style={{paddingLeft: '10%', paddingRight: '10%', paddingTop: '1%'}}>
                        <div className="col-sm-12" style={{padding:0, display: 'flex', alignItems: 'center'}}>
                            <div className="col-sm-6" style={{padding:0}}>
                                <label style={styles.logoTxt} href="#">CARDKLOUT</label>
                            </div>
                            <div className="col-sm-6" style={{padding:0, textAlign: 'right'}}>
                                <button className="btn btn-default" style={styles.btn}>
                                    <Link to={'/addCard'} style={{textDecoration: 'none'}}>ADD CARD</Link>
                                </button>
                                <button onClick={this.logout} className="btn btn-default" style={styles.btn}>
                                   <Link to="/">LOGOUT</Link> 

                                </button>
                            </div>
                        </div>
                        <div className="col-sm-12" style={{padding: 0, display: 'flex', alignItems: 'flex-end'}}>
                            <div className="col-sm-8" style={{padding: 0, display: 'flex'}}>
                                <div style={styles.headerTxt}>
                                    Powerful Card Analysis Tool
                                </div>
                                <div className="form-group has-search col-sm-4 search-group">
                                    {/* <span className="fal fa-search form-control-feedback" style={{color: '#1aa3ff', fontSize:25, paddingTop: '2%'}}></span> */}
                                    <input type="text" className="form-control bar" placeholder="Search Cards"/>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{padding:0, display: 'flex'}}>
                                <p style={{color: '#d9d9d9', fontSize: 15}}>viewing</p>
                                <p style={{fontSize: 15}}>&nbsp;1,209,678</p>
                                <p style={{color: '#d9d9d9', fontSize: 15}}>&nbsp;cards with avg</p>
                                <p style={{color: '#a300cc',fontSize: 15}}>&nbsp;69</p>
                                <p style={{color: '#d9d9d9', fontSize: 15}}>&nbsp;clout</p>
                                  
                            </div>
                            <div>
                                {/* <img style={{width: '50px'}} src={`${process.env.PUBLIC_URL}/assets/images/2.png`} alt="" /> */}
                                {/* <i style={{fontSize: '40px', color: '#1aa3ff'}} className="fas fa-filter"></i> */}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: '1%'}}>
                        <div className="col-sm-12" >
                            <div className="table-responsive-sm">
                                <table className="table fixed_header">
                                    <thead style={{fontSize: 20, fontWeight: 300, border: '1px solid'}}>
                                        <tr>
                                            <th className='col-sm-1'>ID</th>
                                            <th className='col-sm-1`'>PlayerName</th>
                                            <th className='col-sm-1'>Sport</th>
                                            <th className='col-sm-1'>Year</th>
                                            <th className='col-sm-1'>Team</th>
                                            <th className='col-sm-1'>Postition</th>
                                            <th className='col-sm-1'>Brand</th>
                                            <th className='col-sm-1'>Condition</th>
                                            <th className='col-sm-1'>Clout</th>
                                            {/* <th className='col-sm-1'>Delete</th> */}
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        {mapOverCards}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default Home;