import React from 'react';
import Arrow from '../../assets/svg/arrows/arrowCircle.svg';
import './ArrowControlls.css';

interface iArrowControlls {
    next: () => void;
    prev: () => void;
}

const ArrowControlls: React.FC<iArrowControlls> = ({ next, prev }) => {
    return (
        <div className="arrowControlls">
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
