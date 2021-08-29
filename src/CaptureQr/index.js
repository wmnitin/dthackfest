import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import s from "./captureQr.module.scss";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const CaptureQr = (props) => {
  const [waitMsg, changeWaitMsg] = useState(
    "Please wait while we initilize your camera!"
  );
  const canvasRef = useRef();
  const history = useHistory();
  useEffect(() => {
    let localstream;
    const video = document.createElement("video");
    const canvasElement = canvasRef.current;
    const canvas = canvasElement.getContext("2d");
    try {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
          video.srcObject = stream;
          localstream = stream;
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          video.play();
          requestAnimationFrame(tick);
        })
        .catch((e) => {
          changeWaitMsg(`Oops ! We couldn't find any camera in your device`);
        });
    } catch (e) {
      changeWaitMsg(`Oops ! We couldn't find any camera in your device`); //for android devices because webcam wont work withou ssl
    }

    function tick() {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        changeWaitMsg("");
        canvasElement.height = 300;
        canvasElement.width = 400;
        canvas.drawImage(
          video,
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );
        const imageData = canvas.getImageData(
          0,
          0,
          canvasElement.width,
          canvasElement.height
        );
        processImage(imageData);
      }
      requestAnimationFrame(tick);
    }
    const processImage = (imageData) => {
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code) {
        if (code.data) {
          history.push("/view/" + code.data);
        }
      }
    };
    return () => {
      localstream && localstream.getTracks()[0].stop(); //to disable camera on unmount
    };
  }, []);

  return (
    <div className={s.captureQr}>
      <div className={s.cameraImageView}>
        <Typography variant="h4" component="h4">
          {waitMsg}
        </Typography>
        <canvas ref={canvasRef}></canvas>
      </div>
      <center>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{
            fontSize: "30px",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          SCAN
        </Button>
      </center>
      <div className="vp-btm">
        <iframe
          height="200px"
          src="https://14eaca0518494628826ee063de4a21b3.us-east-1.sumerian.aws/"
          title="screen1"
          style={{
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default CaptureQr;
