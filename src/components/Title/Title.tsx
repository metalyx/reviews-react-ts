import React from 'react';
import './Title.css';

interface iTitle {
    text: string;
}

const Title: React.FC<iTitle> = ({ text }) => {
    return (
        <h1 className='title'>
            {text}
            <span className='decorationLine' />
        </h1>
    );
};

export default Title;
