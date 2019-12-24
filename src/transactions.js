// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, DateField} from 'react-admin';


// export const SearchFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="terminalId" alwaysOn />
//         {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//             <SelectInput optionText="name" />
//         </ReferenceInput> */}
//     </Filter>
// );

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
