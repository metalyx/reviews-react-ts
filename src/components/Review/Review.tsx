import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Review.css';

interface iReview {
    avatar?: string;
    name: string;
    text: string;
    supriseMe?: () => void;
    isFadingLeft?: boolean;
    isFadingRight?: boolean;
    children?: React.ReactNode;
}

const Review: React.FC<iReview> = ({
    name,
    text,
    avatar,
    children,
    supriseMe,
    isFadingLeft = false,
    isFadingRight = false
}) => {
    return (
        <div className='reviewContainer'>
            <div className={`review`}>
                <Avatar
                    src={avatar}
                    className={`${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}
                />
                <h4 className={`reviewAuthor ${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}>
                    {name}
                </h4>
                <p className={`reviewText ${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}>
                    {text}
                </p>
                <button onClick={supriseMe} className='supriseMeButton'>
                    Suprise Me
                </button>
                <div style={{ width: '100%' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Review;
