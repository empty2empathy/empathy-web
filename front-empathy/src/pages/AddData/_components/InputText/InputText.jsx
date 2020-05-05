import React from 'react';
import './InputText.scss';

const InputText = ({ handleChange, labelName, inputName, subText }) => {
  return (
    <div className='InputText'>
      <label>
        <p className='label'>{labelName}</p>
        <input name={inputName} onChange={handleChange}/>
        {subText && <p className='sub-text'>{subText}</p>}
      </label>
    </div>
  )
};

export default InputText;
