import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import ItemDetails from './containers/ItemDetails/ItemDetails';
import { Classroom } from './containers/Classroom/Classroom';
import { ClassroomList } from './containers/ClassroomList/ClassroomList';



function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/classroom/:id/pc/:id' component={ItemDetails} />
        <Route path='/classroom/:id' component={Classroom} />
        <Route path='/' component={ClassroomList} />
      </Switch>
    </Layout>
  );
}

export default App;

//Todo: About page and charts