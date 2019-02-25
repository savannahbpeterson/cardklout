import React from 'react';

function InputBoxes(props) {
    const { val } = props
    return (
        <div>
             <div style={{display: 'flex'}}>
                <input onChange={(e) => props.updateFn(val.name, e.target.value)} style={{width: 150, height: 20, display: 'flex'}}/>
            </div>
        </div>
    )
}

export default InputBoxes;



// import React from 'react';

// function InputBoxes(props) {
//     const { val } = props
//     return (
//         <div>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
//             {val.edit ? <div style={{display: 'flex'}}>
//                 <input onChange={(e) => props.updateFn(val.name, e.target.value)} style={{width: 150, height: 20, display: 'flex'}}/>
//                 <button style={{display: 'flex', height: 20, fontSize: '12px', color: 'rgb(27, 144, 221)', fontWeight: 'bold'}} onClick={() => props.submitBtn(val.name)}>DONE</button></div>
//                 // <p>&#10004; milk<br>&#10004; butter<br>&#10004; bread<p>
//                 :
//                 <div>
//                      {val.value}
//                     <button class="fa fa-pencil" style={{fontSize:'4px', backgroundColor: '#e7e7e7', textDecoration: 'none'}} onClick={() => props.edit(val.name)}></button>
                    
//                 </div>
//             }

//         </div>
//     )
// }

// export default InputBoxes;