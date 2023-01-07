import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Review.css';

interface iReview {
    avatar?: string;
    name: string;
    text: string;
    children?: React.ReactNode;
}

const Review: React.FC<iReview> = ({ name, text, avatar, children }) => {
    return (
        <div className="reviewContainer">
            <div className="review">
                <Avatar src={avatar} />
                <h4 className='reviewAuthor'>
                    {name}
                </h4>
                <p className='reviewText'>
                    {text}
                </p>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Review;
