import React from 'react';
import Avatar from '../Avatar/Avatar';
import './Review.css';

interface iReview {
    avatar?: string;
    name: string;
    text: string;
    rating: number;
    surpriseMe?: () => void;
    isFadingLeft?: boolean;
    isFadingRight?: boolean;
    children?: React.ReactNode;
}

const Review: React.FC<iReview> = ({
    name,
    text,
    avatar,
    rating,
    children,
    surpriseMe,
    isFadingLeft = false,
    isFadingRight = false
}) => {
    return (
        <div className='reviewContainer'>
            <div className={`review`}>
                <div className={`transitionContainer ${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}>
                    <Avatar
                        src={avatar}
                        className={`${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}
                    />
                    <h4 className={`reviewAuthor ${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}>
                        {name}
                    </h4>
                    <div className='rating'>
                        {/* Usually, using indexes as keys is an antipattern.  */}
                        {/* However, we can use it here, since we don't care about... */}
                        {/* ...order of our stars emoji, since they are equal to each other */}
                        {/* Also, we won't implement adding/changing them. */}
                        {/* Thus, we can safely use the indexes. */}
                        {Array(rating).fill('⭐').map((item: string, index) => (
                            <span key={index} className='goldStar'>{item}</span>
                        ))}
                        {Array(5 - rating <= 0 ? 0 : 5 - rating).fill('⭐').map((item, index) => (
                            <span key={index} className='emptyStar'>{item}</span>
                        ))}
                    </div>
                    <p className={`reviewText ${isFadingLeft ? 'fadeLeft' : ''} ${isFadingRight ? 'fadeRight' : ''}`}>
                        {text}
                    </p>
                </div>
                <button onClick={surpriseMe} className='supriseMeButton'>
                    Surprise Me
                </button>
                <div style={{ width: '100%' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Review;
