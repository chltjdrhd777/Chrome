import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import SearchPage from "./routes/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchPage} />
      </Router>
    </div>
  );
}

export default App;
