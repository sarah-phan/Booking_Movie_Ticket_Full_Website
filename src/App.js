import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Suspense } from "react";

import { renderRoutesHome } from "./routes";
import { renderRoutesAdmin } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import Loading from "./components/loading";

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense history={history} fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          {renderRoutesAdmin()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
