import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar user={user} logout={logout} />

      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" render={() => (user ? <DashboardPage /> : <LoginPage />)} />
      </Switch>
    </div>
  );
}

export default App;
