import React, { useState } from "react";

interface ImageProps {
    imageSrc: string | undefined;
  }
  
  const BannerImage = ({imageSrc}:ImageProps)=>{
    const [isDeadLink, setIsDeadLink] = useState(false);
    if(isDeadLink){
        return(
            <></>
        )
    }
    return(
        <img
            src={imageSrc}
            className="rounded-lg w-1/2 h-auto"
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
              className="rounded-tr-lg rounded-tl-lg w-full h-48 object-cover mb-2"
              />
        )
    }
    return(
        <img
            src={imageSrc}
            className="rounded-tr-lg rounded-tl-lg w-full h-48 object-cover mb-2"
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
              className="rounded-lg w-full h-auto center"
            />
        )
    }
    return(
          <img
              src={imageSrc}
              className="rounded-lg w-full center"
              onError={() => setIsDeadLink(true)}
            />
    )
}

export {
    LargeImage,
    MediumImage,
    BannerImage
}