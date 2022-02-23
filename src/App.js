import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhoneDetailComponent from './Components/PhoneDetailComponent/PhoneDetailComponent';
import PhoneListContainer from './Components/PhoneListContainer/PhoneListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PhoneListContainer />
          </Route>
          <Route path="/buynow/:id">
            <PhoneDetailComponent />
          </Route>
        </Switch>


      </Router>

    </div>
  );
}

export default App;
