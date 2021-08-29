import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <center>
        <Typography variant="h4" component="h4">
          Welcome to your own Router installation
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => {
            history.push("/scancode");
          }}
          style={{
            fontSize: "30px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Proceed
        </Button>
      </center>
    </div>
  );
};

export default Home;
