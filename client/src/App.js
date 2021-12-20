import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('/me')
  //   .then(response => {
  //     console.log(response)
  //     if (response.ok) {
  //       response.json()
  //       .then(user => {
  //         setUser(user);
  //       });
  //     } else {console.log("not authorized")}
  //   });
  // }, []);

  return (
    <div className="App">
      <Header setLoggedIn={setUser} user={user} />
      <Routes>
        <Route exact path='/' element={ <LandingPage user={user} /> } />
        <Route exact path='/login' element={ user === null ? <Login onLogin={setUser} /> : null } />
        <Route exact path='/signup' element={ user === null ? <Signup onLogin={setUser} /> : null } />
        <Route exact path='/profile' element={ user ? <Profile user={user} resetUser={setUser} /> : null } />
      </Routes>
    </div>
  );
}

export default App;
