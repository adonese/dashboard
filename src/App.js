// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {TransactionList} from "./transactions";
import Dashboard from "./dashboard";
import dataProvider from "./dataProvider";

// const data = dataProvider('https://beta.soluspay.net/api/dashboard');
const App = () =>  
<Admin dataProvider={dataProvider}>
  <Resource name="all" list={TransactionList} />
</Admin>


export default App;
