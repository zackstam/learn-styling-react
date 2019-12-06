import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Stylemodule from './pages/module/stylemoudule';
import Dinamis from './pages/dinamis/dinamis';
import Inline from './pages/inline/inline';
import Classes from './pages/classes/classes';

function App() {


  return (
    <div className="App">
        <Layout>
           <Switch>
              <Route path="/module" component={Stylemodule} />
              <Route path="/dinamis" component={Dinamis} />
              <Route path="/inline" component={Inline}/>
              <Route path="/classes" component={Classes}/>
              <Route path="/" component={Stylemodule}/>
           </Switch>
        </Layout>
    </div>
  );
}

export default App;
