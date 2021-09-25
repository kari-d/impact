import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import Artists from './Components/Artists/Artists';
import Contest from './Components/Contest/Contest';
import RegionCulture from './Components/RegionCulture/RegionCulture';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/artists" component={Artists}/>
            <Route exact path="/contest" component={Contest}/>
            <Route exact path="/region" component={RegionCulture}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;