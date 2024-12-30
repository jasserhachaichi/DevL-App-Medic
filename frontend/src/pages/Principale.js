import React from 'react';
import DropFileInput from './../components/drop-file-input/DropFileInput';


function Principale() {
    const onFileChange = (files) => {
        console.log(files);
    }
    return (
        <div className='drop-file-input-box'>
            <div className="box">
                <h2 className="header">
                    React drop files input
                </h2>
                <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                />
            </div>
        </div>
    )
}

export default Principale