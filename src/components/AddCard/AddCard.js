import React, { Component } from 'react'
import './AddCard.css'
import axios from 'axios'
import { v4 as photoUrlString } from 'uuid'
import { Link } from 'react-router-dom'
// import Dropzone from 'react-dropzone';
// import Spinner from 'react-spinkit';
import InputBoxes from './InputBoxes';
// import ImportImage from './ImportImage';


class AddCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CardValues: [
                { name: 'Player Name', edit: true, value: 'a' },
                { name: 'Card Year', edit: true, value: 'a' },
                { name: 'Team', edit: true, value: 'a' },
                { name: 'Brand', edit: true, value: 'a' },
                { name: 'Sport', edit: true, value: 'aa' },
                { name: 'Position', edit: true, value: 'aa' },
                { name: 'Condition', edit: true, value: 'a' }],

            isUploading: false,
            images: [],
            files: [],
            url: ''
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
    getSignedRequest = (e) => {
        let file = e.target.files[0];
        axios.get('/sign-s3', {
            params: {
                'file-name': file.name,
                'file-type': file.type
            }
        }).then((response) => {
            const { signedRequest, url } = response.data
            this.uploadFile(file, signedRequest, url)
        }).catch(err => {
            console.log(err)
        })
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    uploadFile = (file, signedRequest, url) => {

        var options = {
            headers: {
                'Content-Type': file.type
            }
        };

        axios.put(signedRequest, file, options)
            .then(response => {
                this.setState({url})
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
        console.log('CardValues', CardValues)
        axios.post('/addCard/addNewCard', { CardValues })
            .then(() => {
                // this.props.history.push('/home')
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        let mapOverCardValues = this.state.CardValues.map((val, i, arr) => {
            return <InputBoxes key={i} val={val} updateFn={this.updateCategory} submitBtn={this.submit} edit={this.edit} />
        })
        const { isUploading } = this.state
        return (
            <div className="AddCard_page">
                <input type="file" onChange={this.getSignedRequest}/>
                <img src={this.state.url} />

                {mapOverCardValues}
                <button style={{ fontSize: '20px', color: 'rgb(27, 144, 221)', fontWeight: 'bold' }}
                    onClick={() => this.addNewCard()}>Complete</button>
            </div>

        )
    }
}

export default AddCard;