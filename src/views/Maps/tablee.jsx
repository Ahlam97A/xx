import color from '@material-ui/core/colors/deepOrange';

import React, { Component } from 'react';

import Card from "components/Card/Card.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import Table from "components/Table/Table.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Add from './add';
function getData(url = ``, data = {}) {
    // Default options are marked with *
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




class Build extends Component {



    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value:''
        };
        this.updateInput = this.updateInput.bind(this);
        this. handleSubmit9=this. handleSubmit9.bind(this);

        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/activity.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }

    componentWillUnmount() {
        //this.serverRequest.abort();
    }





    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    updateInput2 = (event) => {
       // let state = {};
       // state[event.target.name] = event.target.value;
       // this.setState(state);

       var x=document.getElementsByTagName('input')
       //x.se

    }

    handleSubmit9=(e)=>{
       e.preventDefault();
       return(
          <div>
              { <Add/>}
           </div>
         )
       
   }

   
    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Maps/activity.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }
   /* contents=(event)=>{
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        <div className="Table">
                <table style={{background:"pink",border:" 1px solid black"}} onChange={this.props.get}>
                    <thead style={{border:" 1px solid black",background:"gray"}}>
                    <tr>
          


                    </tr>
                    </thead>

                    <tbody>
                    {
                    this.state.data.map(item=>
                    <tr key={item.id3}>
                        <td>{item.fname}</td>
                        <td>{item.mname}</td>
                        <td>{item.lname}</td>
                        <td>{item.id_st}</td>
                        <td>{item.id}</td>
                        <td>{item.p_id}</td>
                       
                        <td>{item.city}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.DateBirth}</td>
                    </tr>
                    )
                    }
                    </tbody>

                </table>
            </div>

    }*/



    render() {
       
     /*   const contents = this.state.data.map(item => {
            //change the title and location key based on your API
            return(<tr key={item.id}>

            <tr>
           
                </tr>
            </tr>)
        })*/

        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "30px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            alignItems: 'center',
            
          };
          
        return (
            
            <div className="Table">
                <table style={{background:"white",border:" 1px solid rose"}} onChange={this.props.get}>
                    <thead style={{border:" 1px solid blue",background:"blue"}}>
                    <tr>
                    


                    </tr>
                    </thead>

                    <tbody>
                    {
                    this.state.data.map((item,i)=>
                    <tr key={i}>
                      
                     {/* 
                       <td>
                           <Button color="rose" type="submit"  >
                                <a onClick={this.handleSubmit9}> {item.Type }</a>
                            </Button>
                        </td>
                         */} 

                         <td>



   
 <input style={styleInput}  type="text" id="id"  onChange={this.updateInput2}  value={item.Type}> 
 
  </input>
          
                           
                            

                        </td>



                    </tr>
                    )

                     }
                  <tr>
                           {/*  <td>
                                <Button color="info" type="submit"  >        
                                       <a onClick={this.handleSubmit9}> Add_New_Activity </a>   
                                </Button>
                            </td> */}
                  </tr>
                  
                    </tbody>

                </table>
            </div>
            
                   
            
        );
    }
}





export default Build

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>
    
//</table>

//</div>