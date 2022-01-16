import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';

import { renderRoutesHome } from './routes';
import PageNotFound from './containers/PageNotFound';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
