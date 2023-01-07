import React, { useState } from 'react';
import './Avatar.css';

interface iAvatar {
    src?: string;
    sm?: boolean;
    lg?: boolean;
    className?: string;
}

const Avatar: React.FC<iAvatar> = ({
    src,
    lg = true,
    sm = false,
    className
}) => {
    const [imageOnError, setImageOnError] = useState(false);

    return (
        <>
            {src && !imageOnError && (
                <img className={`avatar ${className}`} src={src} onError={() => setImageOnError(true)} />
            )}
            {src === undefined || imageOnError && (
                // Mock image here
                <></>
            )}
        </>
    );
};

export default Avatar;
