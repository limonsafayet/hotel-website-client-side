import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import RoomForm from "./pages/Room/RoomForm";
import RoomList from "./pages/Room/RoomList";
import RoomBook from "./pages/RoomBook/RoomBook";
import PrivateRoute from "./utilities/privateRoute";

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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/room/create" exact component={RoomForm} />
            <PrivateRoute path="/room/list" exact component={RoomList} />
            <PrivateRoute path="/room-book" exact component={RoomBook} />
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
