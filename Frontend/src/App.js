import React, { Component } from "react";
import Main from './Main'
// import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
// import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Navbar from './Navbar'


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    return (
      <div className="App" style={{ position: "relative", overflow: "hidden" }}>  
        {/* <div style={{ position: "absolute" }}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div> */}
        <div>
          <Navbar props={this.state} logOut={this.logOut} />
          <div className="container mt-3">
          <Switch>
            <Route exact path={"/home"} component={Main} />
            <Route path='/:id/update' exact component={UpdateCustomer}/>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="container">
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/create' exact component={CreateCustomer}/>
        <Route path='/:id/update' exact component={UpdateCustomer}/>
      </Switch>
    </div>
  );
}
*/
