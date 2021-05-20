import './App.css';
import Movie from './components/movie/Movie';
import MovieDetails from './components/movie/MovieDetails';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact render={() => <Movie />} />
            <Route path="/details" exact render={() => <MovieDetails />} />
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
