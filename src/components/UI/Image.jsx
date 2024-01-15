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

  const smallScreenWidth = 600; // Set your desired small screen width

  return (
    <>
      <div style={{ display: isLoaded ? "none" : "inline-block" }}>
        {imageHash && (
          <Blurhash
            hash={imageHash}
            resolutionX={32}
            resolutionY={32}
            width={width} // Adjust the Blurhash width as needed
            height={height}
            style={{ borderRadius: `${borderRadius}px` }}
          ></Blurhash>
        )}
      </div>
      <img
        onLoad={() => setIsLoaded(true)}
        src={imageSrc}
        style={{
          width: "100%", // Set initial width to 100%
          maxWidth: `${smallScreenWidth}px`, // Set max-width for small screens
          maxHeight: height === width ? `${smallScreenWidth}px` : height,
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
