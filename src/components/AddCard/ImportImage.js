// import React, { Component } from 'react'
// import axios from 'axios'
// import { v4 as photoUrlString } from 'uuid'
// import Dropzone from 'react-dropzone';
// import Spinner from 'react-spinkit';


// class ImportImage extends Component {
//     constructor(){
//         super()
//         this.state={
//             isUploading: false,
//             images: [],
//             files: []
//         }
//     }
//     //images
//     getSignedRequest = ([file]) => {
//         this.setState({ isUploading: true })
//         const fileName = `${photoUrlString()}-${file.name.replace(/\s/g, '-')}`
//         axios.get('/sign-s3', {
//             params: {
//                 'file-name': fileName,
//                 'file-type': file.type
//             }
//         }).then((response) => {
//             const { signedRequest, url } = response.data
//             this.uploadFile(file, signedRequest, url)
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     onDrop(files) {
//         this.setState({
//             files
//         });
//     }

//     uploadFile = (file, signedRequest, url) => {

//         var options = {
//             headers: {
//                 'Content-Type': file.type
//             }
//         };

//         axios.put(signedRequest, file, options)
//             .then(response => {
//                 this.setState({ isUploading: false, url: url })
//                 // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
//                 // this.handleUpdate({ what: 'photo', val: url })
//             })
//             .catch(err => {
//                 this.setState({
//                     isUploading: false
//                 })
//                 if (err.response.status === 403) {
//                     alert('Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n' + err.stack)
//                 } else {
//                     alert(`ERROR: ${err.status}\n ${err.stack}`)
//                 }
//             })
//     }
//     render() {
//         const { isUploading } = this.state
//         return (
//             <div className="AddCard_page">
//             <ImportImage />
//                 {/* <div className="dropzone_container"> */}
//                 <Dropzone
//                         onDropAccepted={this.getSignedRequest}
//                         style={{
//                             position: 'relative',
//                             width: 200,
//                             height: 200,
//                             borderWidth: 7,
//                             marginTop: 20,
//                             borderColor: 'rgb(102, 102, 102)',
//                             borderStyle: 'dashed',
//                             borderRadius: 5,
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             fontSize: 28,
//                             backgroundColor: 'red'
//                         }}
//                         accept='image/*'
//                         multiple={false} >
//                         {dropzoneProps => {
//                             return (
//                                 <div>
//                                     {isUploading
//                                         ? <Spinner name="chasing-dots" color="blue" />
//                                         : <h3
//                                         >Drop File or Click Here</h3>
//                                     }
//                                 </div>
//                             );
//                         }}

//                     </Dropzone>

            
//             </div>

//         )
//     }
// }

// export default ImportImage;