import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

class Basic extends React.Component {
constructor(props) {
    super(props);
};

 render() {
      return(
          <Card>
              <CardContent>Mine your own business</CardContent>
          </Card>
 );

}
}

export default Basic
