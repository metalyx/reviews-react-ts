import React, { useState } from 'react';
import Review from '../../components/Review/Review';
import { REVIEWS } from '../../data/reviews';
import { getRandomInt } from '../../helpers/getRandomInt';
import './Reviews.css';
import ArrowControlls from '../../components/ArrowControlls/ArrowControlls';
import Title from '../../components/Title/Title';

const Reviews: React.FC = () => {
    const [visibleReviewIndex, setVisibleReviewIndex] = useState(0);
    const [isFadingLeft, setIsFadingLeft] = useState(false);
    const [isFadingRight, setIsFadingRight] = useState(true);
    const { id, author, avatar, text, rating } = REVIEWS[visibleReviewIndex];

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
        setIsFadingRight(true);
        setIsFadingLeft(false);
    }

    const prevReview = () => {
        checkId(visibleReviewIndex - 1);
        setIsFadingRight(false);
        setIsFadingLeft(true);
    }

    const surpriseMe = () => {
        let rand;
        do {
            rand = getRandomInt(REVIEWS.length);
            setVisibleReviewIndex(rand);
        } while (rand === visibleReviewIndex && REVIEWS.length > 1)
    }

    return (
        <div className='reviews'>
            <Title text='Our Reviews' />
            <Review
                key={id}
                name={author}
                text={text}
                avatar={avatar}
                rating={rating}
                isFadingLeft={isFadingLeft}
                isFadingRight={isFadingRight}
                surpriseMe={surpriseMe}
            >
                <ArrowControlls
                    next={nextReview}
                    prev={prevReview}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        justifyContent: 'space-between',
                        width: 'calc(100% + 100px)',
                        left: '-50px'
                    }}
                />
            </Review>
        </div>
    );
};

export default Reviews;
