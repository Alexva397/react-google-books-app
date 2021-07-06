import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
