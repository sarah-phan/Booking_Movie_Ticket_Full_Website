import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import { renderRoutesHome } from './routes';
import PageNotFound from './containers/PageNotFound';
import Loading from './components/loading';

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>

  );
}

export default App;
