import React from 'react'
export const Input = (props) => {
    return (
        <div >
            <div>
                <input {...props.input} {...props} />
            </div>
        </div>
    )
}