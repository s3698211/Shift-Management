import './App.css';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateShift from './components/pages/CreateShift';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/create-shift' exact component={CreateShift} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
