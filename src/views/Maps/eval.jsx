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



export default class Evaluation extends React.Component{


constructor(props){
    super(props);
}



render(){
    const { classes } = this.props;
    return(
       <form>
       <GridContainer> 
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 /*className={classes.cardTitleWhite}*/> Evaluation</h4>
                    </CardHeader>
                    <CardBody>
                        <center>
                        <GridContainer>
                             <GridItem  xs={12} sm={12} md={12}>
                                {/* <center><EditableTable/></center>   */}   

                                 
                             </GridItem>
                        </GridContainer>
                        </center>
                    </CardBody>

                    <CardFooter>

                    </CardFooter>
                </Card>
            </GridItem>
       </GridContainer>
       </form>  
    )
}

}
