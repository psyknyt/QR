import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 540,
  facingMode: "user",
};

const Camera = () => {
  const webCamRef = useRef(null);
  const [url, setUrl] = useState();

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webCamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webCamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };
  return (
    <>
      <Webcam
        ref={webCamRef}
        audio={false}
        screenshotFormat="image/png"
        screenshotQuality={1}
        onUserMedia={onUserMedia}
        mirrored={true}
      />
      <button onClick={capturePhoto}>capture</button>
      <button
        onClick={() => {
          setUrl(null);
        }}
      >
        Refresh
      </button>

      {url && (
        <div className="flex align-bottom justify-center">
          <a href={url} download>
            <img src={url}></img>
          </a>
        </div>
      )}
    </>
  );
};

export default Camera;
