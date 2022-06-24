import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import Favorites from '../pages/Favorites';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
