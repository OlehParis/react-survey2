import Home from "./Home";
import InventoryReport from "./InventoryReport";
import Inventory from "./Inventory";
import SampleSurvey from "./SampleSurvey";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const SurveyRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink> | <NavLink to="/sample">Sample</NavLink>{" "}
        | <NavLink to="/inventory">Inventory</NavLink> |{" "}
        <NavLink to="/report">Report</NavLink>
      </div>
      <Switch>
        <Route path="/sample">
          <SampleSurvey />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/report">
          <InventoryReport />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default SurveyRoutes;
