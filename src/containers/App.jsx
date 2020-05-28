import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import Movie from '../pages/movie';
import { AuthContext } from '../store/AuthProvider';
import Header from '../components/Header/Header';
import AdminPage from '../pages/admin';
import TopMoviesPage from '../pages/top';
import ProfilePage from '../pages/profile';
import EditForm from '../components/EditForm/EditForm';

function App() {
  const { authenticated, user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/top"><TopMoviesPage /></Route>
          <Route exact path="/admin" render={(props) => user && user.role === 'administrator' ? <AdminPage {...props} /> : <Redirect to="/" />} />
          <Route exact path="/profile" render={(props) => !authenticated || !user ? <Redirect to="/" /> : <ProfilePage {...props} />} />
          <Route exact path="/registration" render={(props) => authenticated ? <Redirect to="/" /> : <RegistrationPage {...props} />} />
          <Route exact path="/login" render={(props) => authenticated ? <Redirect to="/" /> : <LoginPage {...props} />} />
          <Route exact path="/movie/:id" render={(props) => <Movie {...props} />} />
          <Route exact path="/:table/:id/edit" render={(props) => <EditForm {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
