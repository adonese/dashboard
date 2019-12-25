// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import {TransactionList} from "./transactions";
import {SearchList} from "./search";
import Dashboard from "./dashboard";
import dataProvider from "./dataProvider";
import { PostShow } from './profile';

// const data = dataProvider('https://beta.soluspay.net/api/dashboard');
const App = () =>  
<Admin title="Solus Dashboard" dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="all" list={SearchList} />
  <Resource name="all" list={TransactionList} />
  <Resource name="home" show={PostShow}/>
  <Resource name="home" show={Dashboard}/>
</Admin>


export default App;
