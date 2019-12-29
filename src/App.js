// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import {TransactionList} from "./transactions";
import {SearchList} from "./search";
import Dashboard from "./dashboard";
import dataProvider from "./dataProvider";
import { PostShow } from './profile';
import Data from "./count";
import Basic from './basic';
import Analytics, { AnalyticsList } from "./analytics"

// const data = dataProvider('https://beta.soluspay.net/api/dashboard');
const App = () =>  
<Admin title="Solus Dashboard" dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="all" list={SearchList} />
  {/* <Resource name="all" list={TransactionList} /> */}
  {/* <Resource name="home" show={PostShow}/> */}
  {/* <Dashboard/> */}
  <Resource name="data" {...Data}/>
  <Resource name="basic" {...Basic}/>
  <Resource name="charts" list={AnalyticsList} />

  
</Admin>


export default App;
