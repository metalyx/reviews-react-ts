import React, { useState } from 'react';

interface iAvatar {
    src?: string;
    sm?: boolean;
    lg?: boolean;
}

const Avatar: React.FC<iAvatar> = ({
    src,
    lg = true,
    sm = false
}) => {
    const [imageOnError, setImageOnError] = useState(false);

    return (
        <>
            {src && !imageOnError && (
                <img src={src} onError={() => setImageOnError(true)} />
            )}
            {src === undefined || imageOnError && (
                // Mock image here
                <></>
            )}
        </>
    );
};

export default Avatar;
