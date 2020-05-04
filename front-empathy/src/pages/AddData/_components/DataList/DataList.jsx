import React from 'react';
import './DataList.scss';

const DataList = ({ id, name, i }) => {

  return (
    <div className="dataContainer" key={id}>
      <span className="dataIdx">{i + 1}</span>
      <span className="dataId">{id}</span>
      <span className="dataName">{name}</span>
      <span className="button">X</span>
    </div>
  );
}

export default DataList;
