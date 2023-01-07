import React, { useState } from 'react';
import Review from '../../components/Review/Review';
import Arrow from '../../assets/svg/arrows/arrowCircle.svg';
import { REVIEWS } from '../../data/reviews';
import './Reviews.css';
import ArrowControlls from '../../components/ArrowControlls/ArrowControlls';

const Reviews: React.FC = () => {
    const [visibleReviewIndex, setVisibleReviewIndex] = useState(0);
    const { id, author, avatar, text } = REVIEWS[visibleReviewIndex];

    const checkId = (number: number) => {
        let maxIndex = REVIEWS.length - 1;

        if (number > maxIndex) {
            setVisibleReviewIndex(0);
        } else if (number < 0) {
            setVisibleReviewIndex(maxIndex);
        } else {
            setVisibleReviewIndex(number);
        }
    }

    const nextReview = () => {
        checkId(visibleReviewIndex + 1);
    }

    const prevReview = () => {
        checkId(visibleReviewIndex - 1);
    }

    return (
        <div className='reviews'>
            <Review
                key={id}
                name={author}
                text={text}
                avatar={avatar}
            />
            <ArrowControlls
                next={nextReview}
                prev={prevReview}
            />
        </div>
    );
};

export default Reviews;
