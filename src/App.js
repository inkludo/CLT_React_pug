import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Classroom } from './pages/Classroom';
import { Navbar } from './components/Navbar';
import { FirebaseState } from './context/firebase/firebaseState';

function App() {
  return (
    <FirebaseState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={"/"} exact component={Classroom} />
          </Switch>
        </div>
      </BrowserRouter>
    </FirebaseState>
  );
}

export default App;
