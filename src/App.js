import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Create from './components/routes/Create';
import BlogDetails from './components/routes/BlogDetails';
import NotFound from './components/routes/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*"> 
            <NotFound />
          </Route>
        </Switch>

      </div>
    </div>
    </Router>
  );
}

export default App;
