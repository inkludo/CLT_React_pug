import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { FirebaseState } from './context/firebase/firebaseState';

function App() {
  return (
    <FirebaseState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={"/"} exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
