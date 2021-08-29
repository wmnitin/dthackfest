import "./RouterModel.css";
import "react-awesome-slider/dist/styles.css";
import { useState } from "react";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

const RouterModel = () => {
  const [load, setLoad] = useState(false);
  let param = useParams();
  const history = useHistory();
  return (
    <div>
      {!load ? (
        <Typography variant="h4" component="h4">
          Please wait, we are loading your 3D router...
          <p>
            <center>
              <CircularProgress />
            </center>
          </p>
        </Typography>
      ) : (
        <Typography variant="h4" component="h4">
          Know your router
        </Typography>
      )}
      <div className="left-backdrop"></div>
      <iframe
        onLoad={() => {
          setLoad(true);
        }}
        width="100%"
        height={load ? "480px" : 0}
        src="https://poly.google.com/view/eHECwr_7d0n/embed"
        frameBorder="0"
        allowvr="yes"
        title="router model"
        allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"
        allowFullScreen=""
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
      {/* <div
      style={{
        position: "absolute",
        marginTop: "-11vh",
        fontSize: "5vh",
        padding: "4%",
        background: "black",
        color: "#e0e0e0",
        boxShadow: "1px 1px 20px 2px #000000",
      }}
    >
      Model No: 32
    </div> */}
      <div className="bottom-backdrop"></div>
      <div className="right-backdrop"></div>

      <center>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(`/update/${param.id}`);
          }}
          style={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Done with Installation ?
        </Button>
      </center>
      <div
        className="vp-btm"
        style={{
          position: "relative",
          marginTop: "20px",
        }}
      >
        <iframe
          height="200px"
          src="https://05d1ef4e97064fc89a6c41cb2fcb69a4.us-east-1.sumerian.aws/?"
          title="screen1"
          style={{
            border: "none",
          }}
        ></iframe>
      </div>
    </div>
  );
};
export default RouterModel;
