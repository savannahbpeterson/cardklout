import React, { Component } from 'react'
import './AddCard.css'
import axios from 'axios'
import InputBoxes from './InputBoxes';
import {Link} from 'react-router-dom'

const styles = {
    titleTxt1: {
        fontSize: 60,
        fontWeight: 700,
        // marginRight: 100,
        fontFamily: 'sans-serif',
    },
    titleTxt2: {
        fontSize: 30,
        lineHeight: 0,
        fontWeight: 300,
        fontFamily: 'sans-serif',
        color: '#cccccc'
    },
    titleTxt3: {
        fontSize: 90,
        fontWeight: 700,
        fontFamily: 'sans-serif',
        color: '#cccccc',
        lineHeight: 0.4
    },
    titleTxt4: {
        fontFamily: 'sans-serif',
        color: '#cccccc',
        fontSize: 18
    },
    titleTxt5: {
        fontFamily: 'sans-serif',
        color: 'grey',
        fontSize: 30,
        marginTop: 10
    },
    arrowLeft: {
        opacity: 0.2,
        fontSize: 60
    },
    arrowDown: {
        opacity: 0.2,
        fontSize: 30,
        paddingLeft: 10
    },
    arrowRight: {
        opacity: 0.2,
        fontSize: 60,
        paddingLeft: 50
    },
    bg: {
        background: '#e7e7e7',
        height: 150,
        border: '.5px solid grey'
    },
    btn: {
        boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)",
        border: '1px solid #dddddd',
        background: '#f5f5f5',
        fontSize: '30px',
        color: '#c7c7c7',
        fontWeight: 600,
        width: 140,
        height: 55,
        marginTop: '5%'
    },
    addbtn: {
        display: 'flex',
        boxShadow: "0 3px 18px rgba(203, 203, 203, 0.49)",
        background: '#e7e7e7',
        fontSize: '1.7vw',
        color: '#1aa3ff',
        fontWeight: 700,
        padding: '5px 15px',
        marginTop: '15px'
    },
    text: {
        fontSize: 30,
        color: '#e7e7e7'
    },
    imageInputWrapper: {
        position: 'relative',
        overflow: 'hidden',

    }
}


class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CardValues: [
                { name: 'Player Name', edit: true, value: '' },
                { name: 'Card Year', edit: true, value: '' },
                { name: 'Team', edit: true, value: '' },
                { name: 'Brand', edit: true, value: '' },
                { name: 'Sport', edit: true, value: '' },
                { name: 'Position', edit: true, value: '' },
                { name: 'Condition', edit: true, value: '' },
            ],

            isUploading: false,
            images: [],
            files: [],
            front_url: '',
            back_url: '',
            defaultFrontUrl: 'http://memokids.co/wp-content/uploads/2018/08/1980-topps-football-cards-card-front-image-1980-topps-football-cards-most-valuable.jpg',
            defaultBackUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIT_zg98lU3xL-RIiNNo_3-sRwnde29Pwg_muGuA4P1Ats1Vav'
        }
    }
    //THIS IS THE EDIT CARD AND SUBMIT FUNCTIONALLITY
    updateCategory = (name, val) => {
        let copy = [...this.state.CardValues];
        copy.forEach((obj) => {
            if (name === obj.name) {
                obj.value = val;
            }
        })
        this.setState({ CardValues: copy })
    }

    submit = (name) => {
        let copy = [...this.state.CardValues]
        copy.forEach((val) => {
            if (val.name === name) {
                val.edit = false
            }
        })
        this.setState({ CardValues: copy })
    }
    edit = (name) => {
        let copy = [...this.state.CardValues]
        copy.forEach((val) => {
            if (val.name === name) {
                val.edit = true
            }
        })
        this.setState({ CardValues: copy })
    }

    //images
    getSignedRequest = (e, isFront) => {
        let file = e.target.files[0];
        axios.get('/sign-s3', {
            params: {
                'file-name': file.name,
                'file-type': file.type
            }
        }).then((response) => {
            const { signedRequest, url } = response.data
            this.uploadFile(file, signedRequest, url, isFront)
        }).catch(err => {
            console.log(err)
        })
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    uploadFile = (file, signedRequest, url, isFront) => {

        var options = {
            headers: {
                'Content-Type': file.type
            }
        };

        axios.put(signedRequest, file, options)
            .then(response => {
                const location = isFront ? 'front_url' : 'back_url'
                this.setState({[location]: url})
            })
            .catch(err => {

                if (err.response.status === 403) {
                    alert('Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n' + err.stack)
                } else {
                    alert(`ERROR: ${err.status}\n ${err.stack}`)
                }
            })
    }



    //ADD NEW CARD BUTTON
    addNewCard = () => {
        const { CardValues } = this.state
        const bodyObj = { 
            player_name: CardValues[0].value,
            year: CardValues[1].value,
            team: CardValues[2].value,
            brand: CardValues[3].value,
            sport: CardValues[4].value,
            position: CardValues[5].value,
            condition: CardValues[6].value,
            front_url: this.state.front_url,
            back_url: this.state.back_url
        }
        console.log('CardValues', bodyObj)
        console.log(this.state.CardValues[4])
        axios.post('/addCard/addNewCard', bodyObj)
            .then(() => {
                this.props.history.push('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        const { isUploading } = this.state
        return (
            <div className="AddCard_page">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
                <div>
                    <div className="container-fluid" style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '1%' }}>
                        <div className="row">
                            <div className="col-sm-12" style={{ display: 'flex' }}>
                                <div className="col-sm-6">
                                    <p style={styles.titleTxt1}>CARDKLOUT</p>
                                    <p style={styles.titleTxt2}>Powerful Card Analysis Tool</p>
                                </div>
                                <button style={{position: 'absolute', border: 'none', height: 27, color: 'grey', left: 8, top: 20}} type="button" class="btn btn-default btn-sm">
                                    <Link to={'/home'} style={{textDecoration: 'none'}}><span class="glyphicon glyphicon-triangle-left"></span></Link>
                                    
                                 </button>
                                <div className="col-sm-6" style={{ padding: 0, paddingTop: '2%', display: 'block' }}>
                                    <div className="col-sm-12" style={{ padding: 0, display: 'flex' }}>
                                        <div className="col-sm-6" style={{ padding: 0 }}>
                                            <div className="col-sm-12" style={{ display: 'flex', padding: 0 }}>
                                                <div className="col-sm-6" style={{ padding: 0 }}>
                                                    <p style={styles.titleTxt3}>0</p>
                                                    <p style={styles.titleTxt4}>Card Clout</p>
                                                </div>
                                                <div className="col-sm-6" style={{ padding: 0 }}>
                                                    <p style={styles.titleTxt3}>NA</p>
                                                    <p style={styles.titleTxt4}>Card Condition</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6" style={{ textAlign: 'right' }}>
                                            <i style={{ fontSize: 40, opacity: 0.2 }} className="fas fa-filter"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-12" style={{ display: 'flex', padding: 0, alignItems: 'baseline' }}>
                                        <div className="col-sm-6" style={{ padding: 0 }}>
                                        </div>
                                        <div className="col-sm-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <div>
                                                <i style={styles.arrowLeft} className="fas fa-caret-left"></i>
                                                <i style={styles.arrowRight} className="fas fa-caret-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row" style={styles.bg}>
                            <div className="col-sm-12" style={{ paddingLeft: '5%', paddingRight: '5%', display: 'flex' }}>
                                <div className="col-sm-6">
                                    <div className="col-sm-12" style={{ display: 'flex', position: 'absolute', marginTop: '-12%', marginLeft: '-8%' }}>
                                        <div className="col-sm-6">
                                            <div style={{ paddingLeft: 10 }}>
                                                <p style={styles.titleTxt5}>Front</p>
                                                <div className={styles.imageInputWrapper}>
                                                    <input type="file" onChange={(e) => this.getSignedRequest(e, true)} style={{position: 'absolute', width: '100%', height: '100%', opacity: '0.0', zIndex: '2'}}/>
                                                    <img src={this.state.front_url === '' ? this.state.defaultFrontUrl : this.state.front_url} style={{
                                                        position: 'relative',
                                                        width: 320,
                                                        height: 450,
                                                        borderWidth: 10,
                                                        margin: '20px auto',
                                                        borderColor: 'rgb(102, 102, 102)',
                                                        border: 'red',
                                                        borderRadius: 5,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: 28,
                                                        opacity: .5
                                                    }} />
                                                </div>
                                                
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/frontupload.png`} alt="" />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3%' }}>
                                                <ul style={{ display: 'flex', listStyleType: 'none' }}>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20 }} className="fas fa-search"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-sync-alt"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-camera-retro"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-upload"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div style={{ paddingLeft: 10 }}>
                                                <p style={styles.titleTxt5}>Back</p>
                                                <div className={styles.imageInputWrapper} style={{display: 'block'}}>
                                                    <input type="file" onChange={(e) => this.getSignedRequest(e, false)} style={{position: 'absolute', width: '100%', height: '100%', opacity: '0.0', zIndex: '2', left: 0, right: 0, top: 0, bottom: 0}}/>
                                                    <img src={this.state.back_url === '' ? this.state.defaultBackUrl : this.state.back_url} style={{
                                                        position: 'relative',
                                                        width: 320,
                                                        height: 450,
                                                        borderWidth: 10,
                                                        margin: '20px auto',
                                                        borderColor: 'rgb(102, 102, 102)',
                                                        border: 'red',
                                                        borderRadius: 5,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: 28,
                                                        opacity: .5
                                                    }} />
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <i style={{ color: '#1aa3ff', fontSize: 50, position: 'absolute' }} className="fas fa-plus"></i>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/backupload.png`} alt="" />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '3%' }}>
                                                <ul style={{ display: 'flex', listStyleType: 'none' }}>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20 }} className="fas fa-search"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-sync-alt"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-camera-retro"></i></li>
                                                    <li><i style={{ color: '#1aa3ff', fontSize: 20, paddingLeft: 10 }} className="fas fa-upload"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                                    <div className="col-sm-12" style={{ display: 'flex', padding: 0 }}>
                                        <div className="col-sm-6" style={{ padding: 0 }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'end' }}>
                                                    <p style={styles.titleTxt5}>Player Name</p>
                                                    <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                                </div>
                                                <InputBoxes val={this.state.CardValues[0]} updateFn={this.updateCategory}/>
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="col-sm-6" style={{ display: 'flex', padding: 0, justifyContent: 'flex-end' }}>
                                            <div style={{ display: 'block' }}>
                                                <p style={styles.titleTxt4}>Card#</p>
                                                <p style={styles.titleTxt3}>0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12" style={{ display: 'flex', padding: 0}}>
                                <div className="col-sm-6" style={{ paddingTop: '8%', paddingLeft: '5%' }}>
                                    <div className="col-sm-11" style={{ padding: 0, borderRight: '1px solid #000000', height: 500, display: 'flex', alignItems: 'center', position: 'relative' }}>
                                        <div style={{ display: 'block', position: 'absolute', right: '-25px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <p style={styles.text}>no action</p>
                                                    <img src='https://github.com/sunderbean/cardklout/blob/master/public/assets/images/ebay.png?raw=true' alt="" style={{cursor: 'pointer'}} />
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                                <p style={styles.text}>not marked</p>
                                                <button style={styles.btn} className="btn btn-default">Beckett</button>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                                <p style={styles.text}>not marked</p>
                                                <button style={styles.btn} className="btn btn-default">PSA</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" style={{ display: 'block', padding: 0, paddingTop: 20 }}>
                                    <div>
                                            <div style={{ display: 'flex', alignItems: 'end' }}>
                                                    <p style={styles.titleTxt5}>Card Year</p>
                                                    <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                            </div>
                                            <InputBoxes val={this.state.CardValues[1]} updateFn={this.updateCategory}/>
                                        <div style={{ display: 'flex', alignItems: 'end' }}>
                                            <p style={styles.titleTxt5}>Team</p>
                                            {/* <InputBoxes /> */}
                                            <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                        </div>
                                        <InputBoxes val={this.state.CardValues[2]} updateFn={this.updateCategory} />
                                        <div style={{ display: 'flex', alignItems: 'end' }}>
                                            <p style={styles.titleTxt5}>Brand</p>
                                            <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                        </div>
                                        <InputBoxes val={this.state.CardValues[3]} updateFn={this.updateCategory} />
                                        <div style={{ display: 'flex', alignItems: 'end' }}>
                                            <p style={styles.titleTxt5}>Sport</p>
                                            <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                        </div>
                                        <InputBoxes val={this.state.CardValues[4]} updateFn={this.updateCategory}/>
                                        <div style={{ display: 'flex', alignItems: 'end' }}>
                                            <p style={styles.titleTxt5}>Position</p>
                                            <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                        </div>
                                        <InputBoxes val={this.state.CardValues[5]} updateFn={this.updateCategory} />
                                        <i style={{ color: '#1aa3ff', fontSize: 30, paddingTop: 10 }} className="fas fa-plus-circle"></i>
                                        <div style={{display: 'flex', alignItems:'end'}}>
                                            <p style={styles.titleTxt5}>Condition</p>
                                        </div>
                                        <InputBoxes val={this.state.CardValues[6]} updateFn={this.updateCategory} />

                                           <button className="btn btn-default" style={styles.addbtn} onClick={(e) => this.addNewCard(e.target.value)}>ADD CARD</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddCard;