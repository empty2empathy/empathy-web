import React from 'react';
import './DetailInfo.scss';
import LinkTextButton from "components/LinkTextButton";

const DetailInfo = ({ img, title, programType, description, ctaLabel, ctaFunc }) => {
    return (
        <div className="DetailInfo">
            <div className="detail-info">
                <div className="top-info">
                    <img src={img} alt="img"/>
                    <div className="text-info">
                        <p>{title}</p>
                        <p>{programType.join(', ')}</p>
                    </div>
                </div>
                <p className="description">{description}</p>
            </div>

            <LinkTextButton label={ctaLabel} onClick={ctaFunc}/>
        </div>
    );
};

export default DetailInfo;
