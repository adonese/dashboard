// in src/users.js
import React from 'react';

import { Filter,  TextInput, List,  Datagrid, TextField, DateField} from 'react-admin';

const SearchFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="terminalId" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);

export const SearchList = props => (
  <List {...props} filters={<SearchFilter />}>
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