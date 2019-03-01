import React from 'react';

function InputBoxes(props) {
    const { val } = props
    return (
        <div>
             <div style={{display: 'flex'}}>
                <input onChange={(e) => props.updateFn(val.name, e.target.value)} style={{width: 203, height: 30, display: 'flex'}} type="text" class="form-control"/>
            </div>
        </div>
    )
} 

export default InputBoxes;
