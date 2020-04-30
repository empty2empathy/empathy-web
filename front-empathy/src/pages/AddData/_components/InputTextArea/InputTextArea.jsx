import React from 'react';
import './InputTextArea.scss';

const InputTextArea = ({ handleChange, labelName, inputName, subText }) => {
  return (
    <div className='InputTextArea'>
      <label>
        <p className='label'>{labelName}</p>
        <textarea name={inputName} onChange={handleChange}/>
        {subText && <p className='sub-text'>{subText}</p>}
      </label>
    </div>
  )
};

export default InputTextArea;
