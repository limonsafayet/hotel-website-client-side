import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
