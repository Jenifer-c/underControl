import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NewProd                      } from './pages/New/index';
import { TableProd                    } from './pages/Table/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/"    component = { TableProd } />
        <Route       path = "/new" component = { NewProd }   />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
