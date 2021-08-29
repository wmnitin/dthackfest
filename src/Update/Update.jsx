import { Button, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const [submitted, setSubmitted] = useState(false);
  let ssid = useRef();
  let password = useRef();

  const formSubmit = async (e) => {
    e.preventDefault();
    window.setTimeout(()=>{
      setSubmitted(true);
    }, 5000)
  };
  return (
    <div>
      <div className={submitted ? "alertCss top30" : "alertCss"}>
        <Alert severity="success">
          <AlertTitle>
            <strong>Success</strong>
          </AlertTitle>
          You have successfully configured your router
        </Alert>
      </div>
      {!submitted && (
        <div
          style={{
            width: "300px",
            margin: "0 auto",
            background: "#ffe7e7",
            padding: "25px",
            boxShadow: "1px 1px 14px 0px red",
          }}
        >
          <h2>Please input details !</h2>
          <form onSubmit={formSubmit} noValidate autoComplete="off">
            <div>
              <TextField
                inputRef={ssid}
                id="standard-basic"
                label="Enter SSID"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div>
              <TextField
                inputRef={password}
                id="standard-basic"
                label="Enter Password"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => {
                  // history.push(`/update/${param}`);
                }}
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  marginTop: "25px",
                }}
              >
                Done
              </Button>
            </div>
          </form>
          <div className="vp-btm">
            <iframe
              height="200px"
              src="https://527e2a0b0052442eaec24f0e3f955216.us-east-1.sumerian.aws/?"
              title="screen1"
              style={{
                border: "none",
              }}
            ></iframe>
          </div>
        </div>
      )}
      {submitted && (
        <div className="vp-btm">
          <iframe
            height="300px"
            src="https://us-east-1.sumerian.aws/1d5ca37b217a4457ac278d8521987f3d.scene"
            title="screen1"
            style={{
              border: "none",
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Update;
