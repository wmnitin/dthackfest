import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

const isValidModel = (modelInfo) =>
  modelInfo && modelInfo.features && modelInfo.features.length !== 0;

const Home = () => {
  let param = useParams();
  const history = useHistory();
  const [modelInfo, updateModelInfo] = useState({});
  console.log(param.id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    window.setTimeout(() => {
      updateModelInfo({
        make: 'NetGear',
        model: 'MyRouter v3',
        price: '150 pound',
        features: [
          'Uses less electricity',
          'Easily configurable',
          'Onle click stup',
        ],
      });
    }, 5000);
  }, []);

  return (
    <div>
      {isValidModel(modelInfo) && (
        <div>
          <h2>Router : {modelInfo.make}</h2>
          <h2>Router Model : {modelInfo.model}</h2>
          <h2>Router price : {modelInfo.price}</h2>
        </div>
      )}
      <List dense component="nav" aria-label="secondary mailbox folders">
        {isValidModel(modelInfo) &&
          modelInfo.features.map((item, idx) => {
            return (
              <ListItem button>
                <ListItemText primary={idx + 1 + ". " + item} />
              </ListItem>
            );
          })}
        {!isValidModel(modelInfo) && (
          <center>
            <CircularProgress disableShrink />
          </center>
        )}
        {isValidModel(modelInfo) && (
          <center>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push(`/view/router/${param.id}`);
              }}
              style={{
                fontSize: "20px",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              Proceed to Installation
            </Button>
          </center>
        )}
      </List>
    </div>
  );
};

export default Home;
