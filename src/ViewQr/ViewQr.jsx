import { Switch, Route, useRouteMatch } from "react-router-dom";
import ModelInfo from "../ModelInfo/Modelinfo";
import RouterModel from "../RouterModel/RouterModel";

const View = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/router/:id`}>
          <RouterModel></RouterModel>
        </Route>
        <Route path={`${path}/:id`}>
          <ModelInfo></ModelInfo>
        </Route>
      </Switch>
    </div>
  );
};

export default View;
