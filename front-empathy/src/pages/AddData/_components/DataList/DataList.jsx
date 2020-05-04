import React from 'react';
import './DataList.scss';

const DataList = ({ id, name, index }) => {

  return (
    <div className="dataContainer">
      <span className="dataIdx">{index + 1}</span>
      <span className="dataId">{id}</span>
      <span className="dataName">{name}</span>
      <span className="button">X</span>
    </div>
  );
};

export default DataList;
