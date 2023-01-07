import React from 'react';
import Arrow from '../../assets/svg/arrows/arrowCircle.svg';
import './ArrowControlls.css';

interface iArrowControlls {
    next: () => void;
    prev: () => void;
    style?: React.CSSProperties;
}

const ArrowControlls: React.FC<iArrowControlls> = ({ next, prev, style }) => {
    return (
        <div className="arrowControlls" style={style}>
            <button onClick={prev}>
                <Arrow className='reversed' />
            </button>
            <button onClick={next}>
                <Arrow />
            </button>
        </div>
    );
};

export default ArrowControlls;
