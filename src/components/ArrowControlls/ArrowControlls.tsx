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
            <button onClick={prev} name='previousReview'>
                <Arrow className='reversed' />
            </button>
            <button onClick={next} name='nextReview'>
                <Arrow />
            </button>
        </div>
    );
};

export default ArrowControlls;
