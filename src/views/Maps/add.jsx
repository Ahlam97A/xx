import React ,{Component} from 'react';

import Card from "components/Card/Card.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import Table from "components/Table/Table.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import InputForm from './InputForm';



function postData(url , data ) {
    // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.text()); // parses response to JSON
}
export default class Add extends React.Component{


constructor(props){
    super(props);
    this.state={
        data:[],
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.updateInput=this.updateInput.bind(this);
}
updateInput = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
}


onSubmit=(e)=>{
    e.preventDefault();
    postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/add.php`, this.state)
     .then(data => console.log(JSON.stringify(data)))
     .catch(error => console.error(error)); 

     e.target.reset();
}

render(){
    const { classes } = this.props;
    return(
      <form  action="add.php" onSubmit={this.onSubmit} > 
       <GridContainer> 
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="rose">
                        <h4 /*className={classes.cardTitleWhite}*/> Add_New_Activity</h4>
                    </CardHeader>
                    <CardBody>
                        <center>
                        <GridContainer>
                             <GridItem  xs={12} sm={12} md={12}>
                                  <InputForm inputType="text" inputKey="type" inputLabel="Type " updateInput={this.updateInput} />
                                  <InputForm /*onChange={this.onChange}*/  inputType="date" inputKey="date" inputLabel="Date " updateInput={this.updateInput} />
                         
                             </GridItem>
                        </GridContainer>
                        </center>
                    </CardBody>

                    <CardFooter>
                    <Button color="rose" name="add" type="submit" value="Add">Add </Button>
                    </CardFooter>
                </Card>
            </GridItem>
       </GridContainer>
       </form>
    )
}

}
