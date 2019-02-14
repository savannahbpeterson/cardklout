import React, { Component } from 'react'
import './AddCard.css'
// import axios from 'axios'
// import {v4 as photoUrlString} from 'uuid'
// import Dropzone from 'react-dropzone';
import InputBoxes from './InputBoxes';


class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {name: 'Player Name', edit: true, value: ''}, 
                {name: 'Card Year', edit: true, value: ''},
                {name: 'Team', edit: true, value: ''}, 
                {name: 'Manufacturer', edit: true, value: ''}, 
                {name: 'Sport', edit: true, value: ''}, 
                {name: 'Position', edit: true, value: ''}, 
                {name:'Condition', edit: true, value: ''}],

            // urlDropBoxFront: 'https://images-na.ssl-images-amazon.com/images/I/51ce3%2BV902L._SY445_.jpg',
            // urlDropBoxback: 'https://kronozio.blob.core.windows.net/images/card/9f16b02f2ce6456d9cf69ffeaf80168c_back.jpg'
        }
    }
    //THIS IS THE EDIT CARD AND SUBMIT FUNCTIONALLITY
    updateCategory=(name, val)=>{
        let copy = [...this.state.categories];
        copy.forEach((obj) => {
            if (name === obj.name) {
                obj.value = val;
            }
        })
        this.setState({categories: copy})
    }

    submit=(name)=>{
        let copy = [...this.state.categories]
        copy.forEach((val)=>{
            if (val.name === name){
                val.edit = false
            }
        })
        this.setState({categories: copy})
    }
    edit=(name)=>{
        let copy = [...this.state.categories]
        copy.forEach((val)=>{
            if (val.name === name){
                val.edit = true
            }
        })
        this.setState({categories: copy})
    }
    // getSignedRequest = ([file]) => {
    //     this.setState({ isUploading: true })
    //     const fileName = `${photoUrlString()}-${file.name.replace(/\s/g, '-')}`
    // }

    render() {
        let mapOverCategories = this.state.categories.map((val, i, arr) => {
            return <InputBoxes key={i} val={val} updateFn={this.updateCategory} submitBtn={this.submit} edit={this.edit}/>
    })
        const {urlDropBoxBack, urlDropBoxFront, isUploading} = this.state
        return (
            <div className="AddCard_page">
                <div className="dropzone_container">

                    <div className="dropzone_front"
                        style={{marginTop: '80px'}}
                        onDropAccepted={this.getSignedRequest}>
                        <img src={urlDropBoxFront} width="150px"/>
                    </div>
                    <div className="dropzone_back"
                        style={{marginTop: '80px'}}>
                         <img src={urlDropBoxBack} width="150px"/>
                    </div>
                </div>
                {mapOverCategories}
            </div>

        )
    }
}

export default AddCard;