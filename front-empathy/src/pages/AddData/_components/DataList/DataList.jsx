import React from 'react';
import './DataList.scss';

const DataList = ({ id, name, i }) => {

  return (
    <div key={id}>
      <span>{i + 1}</span>
      <span>{id}</span>
      <span>{name}</span>
      <span>X</span>
    </div>
  );
}

export default DataList;
