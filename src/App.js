import "./movie.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Trailer from "./components/trailer";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import MovieApp from './MovieApp';






function App() {

  return(
<div>
<Router>
  
      
      <Switch>
      <Route path="/" exact component={MovieApp} />
      <Route path="/trailer" component={Trailer} />
        </Switch>
</Router>



</div>
  )
}

export default App;