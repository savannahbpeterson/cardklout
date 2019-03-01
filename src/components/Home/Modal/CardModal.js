import React, {Component} from 'react';

const styles = {
    titleTxt1: {
        fontSize: 50,
        fontWeight: 700,
        fontFamily: 'sans-serif'
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
    titleTxtChange: {
        fontSize: 90,
        fontWeight: 700,
        fontFamily: 'sans-serif',
        color: '#ff8c1a',
        lineHeight: 0.4
    },
    titleTxt4: {
        fontFamily: 'sans-serif',
        color: '#cccccc',
        fontSize: 18
    },
    titleTxt5: {
        display: 'flex',
        fontFamily: 'sans-serif',
        color: '#b3b3b3',
        fontSize: 15,
        marginBottom: 0,
        fontWeight: 300,
        marginTop: 10
    },
    titleTxt: {
        fontFamily: 'sans-serif',
        color: '#cccccc',
        fontSize: 18,
        textAlign: 'right'
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
        border: '1px solid #cccccc'
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
        marginTop:'5%'
    },
    text: {
        fontSize: 30,
        color: '#e7e7e7'
    }
}

class CardModal extends Component {
    render() {
        const { card_id, player_name, sport, year, team, manufacturer, brand, condition, clout, position, front_url, back_url} = this.props.modalCard
        console.log(111111111, front_url, back_url)
        const {url} = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311.R1.TR3.TRC0.A0.H0.Xjim+rice+base.TRS0&_nkw=jim+rice+baseball+cards&_sacat=0"
        return (
            <div>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
                <div onClick={() => this.props.toggleCardModal()} style={{ position: 'absolute', height: '100vh', width: '100vw', zIndex: 4}}>
                    <div style={{height: '90vh', width: '90vw', position: 'absolute', zIndex: 5, left: '5vw', top: '5vh'}}>
                        {/* <p style={{position: 'absolute', fontSize: 24, fontWeight: 600}} onClick={() => this.props.toggleCardModal()}>X</p> */}
                        {/* <button style={{position: 'absolute'}} type="button" class="close" aria-label="Close" onClick={() => this.props.toggleCardModal()}>
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                        <button style={{position: 'absolute', color: 'grey', border: 'none', left: 6}} type="button" class="btn btn-default btn-sm" onClick={() => this.props.toggleCardModal()}>
                            <span class="glyphicon glyphicon-remove"></span> 
                        </button>
                    </div>
                </div>
                <div className="container-fluid" style={{paddingLeft: '5%', paddingRight: '5%', paddingTop: '1%'}}>
                    <div className="row">
                        <div className="col-sm-12" style={{display: 'flex'}}>
                            <div className="col-sm-6">
                                <p style={styles.titleTxt1}>CARDKLOUT</p>
                                <p style={styles.titleTxt2}>Powerful Card Analysis Tool</p>
                            </div>
                            <div className="col-sm-6" style={{padding: 0, paddingTop: '2%', display: 'block'}}>
                                <div className="col-sm-12" style={{padding: 0, display: 'flex'}}>
                                    <div className="col-sm-6" style={{padding: 0}}>
                                        <div className="col-sm-12" style={{display: 'flex', padding: 0}}>
                                            <div className="col-sm-6" style={{display: 'flex', padding: 0}}>
                                                <div>
                                                    <p style={styles.titleTxtChange}>27</p>
                                                    <p style={styles.titleTxt4}>Card Clout</p>
                                                </div>
                                                {/* <i style={{color: '#cc0000', fontSize: 25, marginTop: '-10px'}} className="fas fa-arrow-from-top"></i> */}
                                            </div>
                                            <div className="col-sm-6" style={{padding: 0}}>
                                                <p style={styles.titleTxt3}>POOR</p>
                                                <p style={styles.titleTxt4}>Card Condition</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                                            <p style={{color: '#d6d6d6'}}>12</p>
                                            {/* <i style={{fontSize: 40, opacity: 0.2}} className="fas fa-filter"></i> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12" style={{display: 'flex', padding: 0, alignItems: 'baseline'}}>
                                    <div className="col-sm-6" style={{padding: 0}}>
                                        <p style={{fontSize: 50, color: '#1aa3ff', fontWeight: 300}}>M12345678</p>
                                    </div>
                                    <div className="col-sm-6" style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <div style={{display: 'flex', alignItems: 'flex-end'}}>
                                            {/* <i style={styles.arrowLeft} className="fas fa-caret-left"></i> */}
                                            <p style={{color: '#d6d6d6', fontSize: 15,paddingLeft: 5, paddingRight: 5}}>1 of 12</p>
                                            {/* <i style={styles.arrowLeft} className="fas fa-caret-right"></i> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="container-fluid">
                    <div className="row" style={styles.bg}>
                        <div className="col-sm-12" style={{paddingLeft: '5%', paddingRight: '5%', display: 'flex'}}>
                            <div className="col-sm-6">
                                <div className="col-sm-12" style={{display: 'flex', position: 'absolute', marginTop: '-12%', marginLeft: '-8%'}}>
                                    <div className="col-sm-6">
                                        <div style={{paddingLeft: 10}}>
                                            <p style={styles.titleTxt5}>Front</p>
                                        </div>
                                            <img src={front_url} style={{
                                                        position: 'relative',
                                                        width: 160,
                                                        height: 210,
                                                        borderWidth: 10,
                                                        margin: '20px auto',
                                                        borderColor: 'rgb(102, 102, 102)',
                                                        border: 'red',
                                                        borderRadius: 5,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: 28
                                                    }}/>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            {/* <i style={{color: '#1aa3ff', fontSize: 50, position: 'absolute'}} className="fas fa-plus"></i> */}
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/jimrice-front.png`} alt=""/>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '3%'}}>
                                            <ul style={{display: 'flex', listStyleType: 'none'}}>
                                                {/* <li><i style={{color: '#1aa3ff', fontSize: 20}} className="fas fa-search"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-sync-alt"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-camera-retro"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-upload"></i></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div style={{paddingLeft: 10}}>
                                            <p style={styles.titleTxt5}>Back</p>
                                        </div>
                                        <img src={back_url} style={{
                                                        position: 'relative',
                                                        width: 160,
                                                        height: 210,
                                                        borderWidth: 10,
                                                        margin: '20px auto',
                                                        borderColor: 'rgb(102, 102, 102)',
                                                        border: 'red',
                                                        borderRadius: 5,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        fontSize: 28
                                                    }}/>
                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            {/* <i style={{color: '#1aa3ff', fontSize: 50, position:'absolute'}} className="fas fa-plus"></i> */}
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/jimrice-back.png`} alt=""/>
                                        </div>
                                        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '3%'}}>
                                            <ul style={{display: 'flex', listStyleType: 'none'}}>
                                                {/* <li><i style={{color: '#1aa3ff', fontSize: 20}} className="fas fa-search"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-sync-alt"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-camera-retro"></i></li>
                                                <li><i style={{color: '#1aa3ff', fontSize: 20, paddingLeft: 10}} className="fas fa-upload"></i></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6" style={{display: 'flex', alignItems: 'center', padding: 0}}>
                                <div className="col-sm-12" style={{display: 'flex', padding: 0}}>
                                    <div className="col-sm-6" style={{padding: 0}}>
                                        <div>
                                            <div style={{display: 'flex', alignItems: 'end', bottom: 20}}>
                                                <p style={styles.titleTxt5}>Player Name:</p>
                                                {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                            </div>
                                            {/*<hr style={{width: 15, border: '2px solid #000000'}}/>*/}
                                            <p style={{display: 'flex', fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{player_name}</p>
                                            <div style={{display: 'flex', alignItems: 'end'}}>
                                                <p style={styles.titleTxt5}>Card Year:</p>
                                                {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                            </div>
                                            <p style={{display: 'flex', fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{year}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6" style={{display: 'flex', padding: 0, justifyContent: 'flex-end'}}>
                                        <div style={{display: 'block'}}>
                                            <p style={styles.titleTxt}>Card#</p>
                                            <p style={styles.titleTxt3}>340</p>
                                            <img style={{paddingTop: 30, width: '70%', position: 'absolute'}} src={`${process.env.PUBLIC_URL}/assets/images/colorbar.png`} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12" style={{display: 'flex', padding: 0}}>
                            <div className="col-sm-6" style={{paddingTop: '8%', paddingLeft: '5%'}}>
                                <div className="col-sm-11" style={{padding: 0, borderRight: '1px solid #000000', height: 500, display: 'flex', alignItems: 'center', position: 'relative'}}>
                                    <div style={{display: 'block', position: 'absolute', right: '-25px'}}>
                                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <div style={{display: 'flex'}}>
                                                <p style={styles.text}>no action</p>
                                                <img src='https://github.com/sunderbean/cardklout/blob/master/public/assets/images/ebay.png?raw=true' alt="" style={{cursor: 'pointer'}} />
                                                <a style={{backgroundColor: 'green'}} href={url}/>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                                            <p style={styles.text}>not marked</p>
                                            <button style={styles.btn} className="btn btn-default">Beckett</button>
                                        </div>
                                        <div style={{display: 'flex', alignItems: 'baseline'}}>
                                            <p style={styles.text}>not marked</p>
                                            <button style={styles.btn} className="btn btn-default">PSA</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6" style={{display: 'block', padding: 0, paddingTop: 20}}>
                                <div>
                                    <div style={{display: 'flex', alignItems: 'end'}}>
                                        <p style={styles.titleTxt5}>Team:</p>
                                        {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                    </div>
                                    <p style={{display: 'flex',fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{team}</p>
                                    {/* <div style={{display: 'flex', alignItems: 'end'}}>
                                        <p style={styles.titleTxt5}>Manufacture:</p>
                                        <i style={styles.arrowDown} className="fas fa-caret-down"></i>
                                    </div> */}
                                    <p style={{display: 'flex',fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{manufacturer}</p>
                                    <div style={{display: 'flex', alignItems: 'end'}}>
                                        <p style={styles.titleTxt5}>Brand:</p>
                                        {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                    </div>
                                    <p style={{display: 'flex',fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{brand}</p>
                                    <div style={{display: 'flex', alignItems: 'end'}}>
                                        <p style={styles.titleTxt5}>Sport:</p>
                                        {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                    </div>
                                    <p style={{display: 'flex',fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{team}</p>
                                    <div style={{display: 'flex', alignItems: 'end'}}>
                                        <p style={styles.titleTxt5}>Position:</p>
                                        {/* <i style={styles.arrowDown} className="fas fa-caret-down"></i> */}
                                    </div>
                                    <p style={{display: 'flex',fontSize: 30, lineHeight: 0.6, color: '#696969', fontWeight: 600}}>{position}</p>
                                    {/* <i style={{color: '#1aa3ff', fontSize: 30, paddingTop: 10}} className="fas fa-plus-circle"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CardModal;