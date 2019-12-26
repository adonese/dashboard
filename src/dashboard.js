// in src/Dashboard.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <Card>
        <CardHeader title="Welcome to the Solus Dashboard" />
        <CardContent>Review, sort and search through your Transactions <a href="#/all">go to transactions panel.</a>.</CardContent>
    </Card>
);
