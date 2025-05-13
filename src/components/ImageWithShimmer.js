import { useState } from 'react';
import { CDN_URL } from "../utils/constants";

const ImageWithShimmer = ({ imageId, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="image-shimmer-container">
      {!imageLoaded && <div className="image-shimmer-effect"></div>}
      <img 
        className={`res-logo ${imageLoaded ? 'visible' : 'hidden'}`}
        src={CDN_URL + imageId}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
    </div>
  );
};

export default ImageWithShimmer;