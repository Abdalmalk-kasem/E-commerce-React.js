/* eslint-disable react/prop-types */
import { useState } from "react";
import { Blurhash } from "react-blurhash";

const Image = ({
  imageSrc,
  imageHash,
  width,
  height,
  borderRadius,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <div style={{ display: isLoaded ? "none" : "inline-block" }}>
        {imageHash && (
          <Blurhash
            hash={imageHash}
            resolutionX={32}
            resolutionY={32}
            width={width}
            height={height}
            style={{ borderRadius: `${borderRadius}px` }}
          ></Blurhash>
        )}
      </div>
      <img
        onLoad={() => setIsLoaded(true)}
        src={imageSrc}
        style={{
          width: width,
          height: height,
          borderRadius: `${borderRadius}px`,
          loading: "lazy",
          display: isLoaded ? "inline-block" : "none",
        }}
        {...props}
      />
    </>
  );
};

export default Image;
