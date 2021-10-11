import React from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import Spinner from "./Spinner.jsx";

// input props (obj)
// output JSX

// algo
// 1. show login by default (login по умолчанию) +++
// 2. after login click - hide login, show spinner for 2 sec ++
// 3. after 2 sec - hide spinner, show logout ++
// 4. after logout click - hide logout and show login ++

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      onSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({ onSpinner: true });
    setTimeout(() => {
      this.setState({ onSpinner: false });
      this.setState({ isLoggedIn: true });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );
    return <>{this.state.onSpinner ? <Spinner /> : button}</>;
  }
}

export default Auth;
