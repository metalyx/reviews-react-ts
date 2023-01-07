import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Review.css';

interface iReview {
    avatar?: string;
    name: string;
    text: string;
}

const Review: React.FC<iReview> = ({ name, text, avatar }) => {
    return (
        <div className="review">
            <Avatar src={avatar} />
            <h4 className='reviewAuthor'>
                {name}
            </h4>
            <p className='reviewText'>
                {text}
            </p>
        </div>
    );
};

export default Review;
