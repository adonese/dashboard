import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {List} from 'react-admin';
import moment from "moment";

export const Analytics = (props) => {
    console.log("the props is: ", Object.values(props.data))
    return (
<BarChart
        width={500}
        height={300}
        data={Object.values(props.data)}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="CreatedAt" tickFormatter={timeStr => moment(timeStr).format('YY:MM')} />
        <YAxis dataKey="tranAmount" />
        <Tooltip />
        <Legend />
        <Bar dataKey="ID" fill="#8884d8" />
        <Bar dataKey="tranAmount" fill="#82ca9d" />
        {/* <Bar dataKey="ID" fill="#fffff" /> */}

      </BarChart>
  );
}


export const AnalyticsList = (props) => {
  return (
    <List title="Analytics" {...props} perPage={10}>
      <Analytics />
    </List>
  )
}