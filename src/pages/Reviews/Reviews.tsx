import React, { useState } from 'react';
import Review from '../../components/Review/Review';
import { REVIEWS } from '../../data/reviews';
import './Reviews.css';

const Reviews: React.FC = () => {
    const [visibleReviewId, setVisibleReviewId] = useState(1);

    return (
        <div className='reviews'>
            {REVIEWS.map(({ id, author, avatar, text }) => {
                if (visibleReviewId === id) {
                    return (
                        <Review
                            key={id}
                            name={author}
                            text={text}
                        />
                    )
                } else {
                    return (
                        <React.Fragment key={id} />
                    )
                }
            })}
        </div>
    );
};

export default Reviews;
