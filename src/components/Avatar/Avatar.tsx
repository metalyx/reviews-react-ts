import React, { useEffect, useState } from 'react';
import userImage from '../../assets/png/user.png';
import './Avatar.css';

interface iAvatar {
    src?: string;
    className?: string;
}

const Avatar: React.FC<iAvatar> = ({
    src,
    className
}) => {
    const [imageOnError, setImageOnError] = useState(false);
    
    useEffect(() => {
        if (src === undefined || src === null) {
            setImageOnError(true);
        }
    }, []);

    return (
        <>
            {src && !imageOnError && (
                <img
                    className={`avatar ${className}`}
                    src={src}
                    onError={() => setImageOnError(true)}
                    alt='User Avatar'
                />
            )}
            {imageOnError && (
                <img
                    className={`avatar ${className}`}
                    src={userImage}
                    alt='User Avatar'
                />
            )}
        </>
    );
};

export default Avatar;
