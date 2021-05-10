import './App.css';
import Calendar from "./pages/calendar"
import Nav from "./components/Nav"
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/calendar">
        <Calendar />
      </Route>

    </Router>
  );
}

export default App;
