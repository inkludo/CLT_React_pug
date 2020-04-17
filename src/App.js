import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import { Classroom } from './containers/Classroom/Classroom';
import { ClassroomList } from './containers/ClassroomList/ClassroomList';
import {ItemDetails}  from './containers/ItemDetails/ItemDetails';
import { HelpPage } from './components/HelpPage/HelpPage';
import {ClientConfig} from './containers/ClientConfig/ClientConfig'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/classroom/:id/pc/:id' component={ItemDetails} />
        <Route path='/classroom/:id' component={Classroom} />
        <Route path='/clientConfig' component={ClientConfig} />
        <Route path='/help' component={HelpPage} />
        <Route path='/' component={ClassroomList} />
      </Switch>
    </Layout>
  );
}


export default App;
