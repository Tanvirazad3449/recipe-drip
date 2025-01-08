import React, { useState } from "react";

interface ImageProps {
    imageSrc: string | undefined;
    className?: string;
  }
  
  const BannerImage = ({imageSrc, className}:ImageProps)=>{
    const [isDeadLink, setIsDeadLink] = useState(false);
    if(isDeadLink){
        return(
            <></>
        )
    }
    return(
        <img
            src={imageSrc}
            className={`w-full md:w-1/2 h-auto ${className}`}
            onError={() => setIsDeadLink(true)}
          />
    )
}

const LargeImage = ({imageSrc}:ImageProps)=>{
    const [isDeadLink, setIsDeadLink] = useState(false);
    if(isDeadLink){
        return(
            <img
              src="/no-image-found.jpg"
              className="  w-full h-48 object-cover mb-2"
              />
        )
    }
    return(
        <img
            src={imageSrc}
            className="  w-full h-48 object-cover mb-2"
            onError={() => setIsDeadLink(true)}
          />
    )
}

const MediumImage = ({imageSrc}:ImageProps)=>{
    const [isDeadLink, setIsDeadLink] = useState(false);
    if(isDeadLink){
        return(
            <img
              src="/no-image-found.jpg"
              className="w-full h-48 object-cover"
            />
        )
    }
    return(
          <img
              src={imageSrc}
              className="w-full h-48 object-cover"
              onError={() => setIsDeadLink(true)}
            />
    )
}

export {
    LargeImage,
    MediumImage,
    BannerImage
}