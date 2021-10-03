import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='section'>
      
      <Router>
        <Home/>
        <Switch>
          <Route />
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
