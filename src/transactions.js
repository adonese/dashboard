// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, EmailField, DateField, BooleanField} from 'react-admin';

export const TransactionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="ID" />
            <DateField source="CreatedAt" />
            <TextField source="terminalId" />
            <TextField source="responseMessage" />
            <TextField source="approvalCode" />
            <TextField source="tranAmount" />
            <TextField source="responseStatus" />
            <TextField source="responseCode" />
        </Datagrid>
    </List>
);
