import React, { useState } from "react";

interface ImageProps {
  imageSrc: string | undefined;
  className?: string;
  size?: "banner" | "large" | "medium"; // Determine image size type
}

const Image = ({ imageSrc, className = "", size = "medium" }: ImageProps) => {
  const [isDeadLink, setIsDeadLink] = useState(false);

  // Default fallback image when the source is broken or not found
  const fallbackImage = "/no-image-found.jpg";

  // Define class names for different sizes
  const imageClassNames = {
    banner: `w-full xl:w-1/2 h-auto ${className}`,
    large: `w-full h-48 object-cover mb-2 ${className}`,
    medium: `w-full h-48 object-cover ${className}`,
  };

  if (isDeadLink) {
    return <img src={fallbackImage} className={imageClassNames[size]} />;
  }

  return (
    <img
      src={imageSrc}
      alt={imageSrc}
      className={imageClassNames[size]}
      onError={() => setIsDeadLink(true)}
    />
  );
};

export { Image };
