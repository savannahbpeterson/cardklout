import React from 'react';

function InputBoxes(props) {
    const { val } = props
    return (
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            {val.edit ? <div>{val.name}
                <input onChange={(e) => props.updateFn(val.name, e.target.value)} />
                <button style={{fontSize: '8px'}} onClick={() => props.submitBtn(val.name)}>SUBMIT</button></div>
                :
                <div>
                    {val.name} {val.value}
                    <button class="fa fa-pencil" style={{fontSize:'14px'}} onClick={() => props.edit(val.name)}></button>
                    
                </div>
            }

        </div>
    )
}

export default InputBoxes;