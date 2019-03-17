



import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from '@material-ui/icons/Search';
import { Edit } from '@material-ui/icons/Edit';

import React from "react";

import Build from 'views/Maps/tablee';

import Card from "components/Card/Card.jsx";

import avatar from "assets/img/faces/marc.jpg";

import Add from 'views/Maps/add';

import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import InputForm from "./InputForm";
import Evaluation from './eval';

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

function getData(url ) {
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
  
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
       .then(response => response.json()); // parses response to JSON
  }

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


//function EditCriteria(props) {
class EditCriteria extends React.Component {
    constructor(props) {
        super(props);

        this.state = {flag:false};
        this.getTable=this.getTable.bind(this);
        this. onClick=this. onClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
       // this.updateInput = this.updateInput.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
   
  
  getTable(){
      
    getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/activity.php`, this.state)
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error(error));  

    return(
        <center>
            <div>
                <Build />
            </div>
        </center>
     );
  }


  
  onClick11(e) {
    e.preventDefault();
    this.setState({ flag: true });
}
onClick(e) {
    e.preventDefault();
    this.setState({ flag: true });
}




onSubmit() {
  
    return (
        <div>


            {this.state.flag ? <Add /> : <div></div>}
        </div>
    );
}


     
 




    render() {
        // var props;
        const { classes } = this.props;
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "20px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px"
        };
        return (
            <div style={{ alignContent: "Center" }}>

           
                <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}> Current_Activities </h4>

                            </CardHeader>
                            <CardBody>
                             <center> {this.getTable()}</center>  
                            </CardBody>
                            
                            <form onSubmit={this.onSubmit}>
                                    <CardFooter>
                                        <Button /*justIcon round*/ color="info" type="submit" value="Search" onClick={this.onClick} /*onClick={this.onClick.bind(this)}*/ >
                                          {/*  <Search onSubmit={this.onSubmit} />  */}  Add_New_Activity
                                        </Button>
                                    </CardFooter>
                            </form>
                        </Card>
                    </GridItem>
             {/*    </GridContainer>


                <GridContainer>*/} 
                 
                { /*   <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="rose">
                                <h4 className={classes.cardTitleWhite}> Add_New_Activity</h4>

                            </CardHeader>
                            <CardBody>
                             <cenetr> </cenetr>  
                            </CardBody>
                        </Card>
                    </GridItem>*/}

<GridItem>    <Add /></GridItem>
                 

   <Evaluation/>
                </GridContainer>
              
            </div>
        );
    }
}
export default withStyles(styles)(EditCriteria);
