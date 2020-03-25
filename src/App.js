import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { FirebaseState } from './context/firebase/firebaseState';
import Classroom from './containers/Classroom';
import Layout from './hoc/Layout/Layout';
import ItemDetails from './components/ItemDetails/ItemDetails';

function App() {
  return (

    <Layout>
      <Switch>
        {/* <Route path='/pc/:id' component={ItemDetails} /> */}
        <Route path='/' component={Classroom} />
      </Switch>
    </Layout>
  );
}

export default App;

// Classroom? => 32z/33z/37z ? => ItemList => DataItem => ItemDetails 
// 32z/33z/37z ? => ItemList => DataItem => ItemDetails // 3 containers or 1 hoc?!

