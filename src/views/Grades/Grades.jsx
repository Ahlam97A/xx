import BugReport from "@material-ui/icons/BugReport";
import InputLabel from "@material-ui/core/InputLabel";

//import DateFnsUtils from '@date-io/date-fns';
import Card from "components/Card/Card.jsx";

import React, { Component } from 'react';
import Popup from "reactjs-popup";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import { TableEditablePage } from "views/Grades/editable_table.jsx";
import InputForm from 'views/Grades/InputForm';
import Point from 'views/Grades/edittable';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
//import {XX} from 'views/Grades/xx';
import App from 'views/Grades/table/index';
import Exam from "views/Grades/exam";
const style = {
    typo: {
        paddingLeft: "25%",
        marginBottom: "40px",
        position: "relative"
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "20px",
        position: "absolute",
        width: "200px"
    },
    cardCategoryWhite: {
        color: "rgba(200,2,2,.62)",
        margin: "0",
        fontSize: "16px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFffff",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};



function getData(url) {
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",

            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => response.json()); // parses response to JSON
}
function postData(url, data) {
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

export default class Grades extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            checked: false,
            selected: {},
            selectedDate: '',
            value: '',
            showPopup: false
        }
        // this.getlevel=this.getlevel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.updateInput1 = this.updateInput1.bind(this);
        this.togglePopup=this.togglePopup.bind(this);

    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }
    handleChange = name => event => {

        this.setState(state => ({ selected: state.data.map(n => n.level) }));


        this.setState({ selected: [] });
        console.log(name);

        this.setState({ [name]: event.target.checked });
        this.setState({ checked: !this.state.checked });

    };

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }
    updateInput1 = (event) => {
        let state = {};
        state[event.target.name] = event.target.checked;
        this.setState(state);
    }
    handleChange11 = event => {
        let { value, min, max } = event.target;
        value = Math.max(Number(min), Math.min(Number(max), Number(value)));

        this.setState({ value });
    };
    /*  getlevel=(e)=>{
          e.preventDefault();
          getData(`http://localhost/xx-master/src/views/Grades/get.php`, this.state)
              .then(data => console.log(JSON.stringify(data)))
              .catch(error => console.error(error));
      }*/

    /*
        componentDidMount() {
            postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/create.php`, this.state)
                .then(data => console.log(JSON.stringify(data)))
                .catch(error => console.error(error));
        }
    */
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/create.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

        e.target.reset();
        // e.target.Checkbox.reset();



    }
    /*  getsubject=(e)=>{
          e.preventDefault();
          getData(`http://localhost/xx-master/src/views/Grades/gets.php`, this.state)
              .then(data => console.log(JSON.stringify(data)))
              .catch(error => console.error(error));
      }*/


    // _handleChange(event) {
    //   let state = {};
    //   this.setState({ value: event.target.value }) // I tried before target.value, or nativeEvent.value
    // }
    componentDidMount() {
        var th = this;
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Grades/getallclass.php`)

            .then(function (event) {
                if (event != null) {
                    th.setState({
                        data: event//.data

                    });
                }
            })


    }

    render() {
        const styleInput = {
            width: "100%",
            alignContent: "Center",
            height: "25px",
            margin: "3px 0",
            border: "1px solid #ccc",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            paddingleft: "10px",

        };
        const { classes } = this.props;
        const { selectedDate } = this.state;

        var msg;
        if (this.state.checked) {
            msg = "checked";
        } else {
            msg = "unchecked";
        }

        return (
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                        <CustomTabs
                            headerColor="info"
                            tabs={[
                                {
                                    tabName: "Current Exam",
                                    tabIcon: BugReport,
                                    tabContent: (
                                    <form>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={12}>
                                                <Card>
                                                    <CardHeader style={{background:"#e3f2fd"}}>
                                                        <h4>The Avilable Exam</h4>
                                                       
                                                    </CardHeader>

                                                    <CardBody>
                                                        <div style={{ width: "100%", textAlign: "center" }} >
                                                          
                                                            <Exam />
                                                        </div>
                                                    </CardBody>



                                                </Card>
                                            </GridItem>
                                        </GridContainer>

                                    </form>
                                    )
                                }
                                , {
                                    tabName: "Create Exam",
                                    tabIcon: BugReport,
                                    tabContent: (
                                        <form action="create.php" onSubmit={this.handleSubmit} style={{ alignContent: "Center" }}  >
                                          
                                            <CardHeader style={{ background: "#fce4ec" }}><h4 >Form to add an Exam</h4></CardHeader>
                                            <CardBody>


                                                <InputForm inputType="text" inputKey="level" inputLabel="Class " updateInput={this.updateInput} />
                                                <InputForm inputType="text" inputKey="subject" inputLabel="Subject  " updateInput={this.updateInput} />
                                                <div style={{ display: 'flex', width: '100%' }}>
                                                    <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }} >

                                                        <InputLabel style={{ color: "#000", width: "300px", alignContent: "Center", textAlign: "center" }}> {"     "}Semester     {"   "}  </InputLabel>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={6} md={12}>
                                                        <select name="sel_s" required style={styleInput} onChange={this.updateInput}  >
                                                            <option></option>
                                                            <option name="sel_s">1st Semester</option>
                                                            <option name="sel_s">2nd Semester</option>
                                                        </select>
                                                    </GridItem>
                                                </div>

                                                <InputForm inputType="number" inputKey="max" inputLabel="Max Limit " updateInput={this.updateInput} />


                                                <div style={{ display: 'flex', width: '100%' }}>
                                                    <GridItem xs={12} sm={6} md={12} style={{ textAlign: "center" }} >
                                                        <InputLabel style={{ color: "#000", alignContent: "Center", width: "100%", textAlign: "center" }}> Type of Exam </InputLabel>
                                                    </GridItem>
                                                    <GridItem xs={12} sm={6} md={12}>
                                                        <select name="sel_t" required style={styleInput} onChange={this.updateInput} >
                                                            <option></option>
                                                            <option name="sel_t" value="Daily Exam">Daily Exam</option>
                                                            <option name="sel_t" value="Mid Exam">Mid Exam</option>
                                                            <option name="sel_t" value="Final Exam">Final Exam</option>
                                                        </select>
                                                    </GridItem>
                                                </div>


                                                <InputForm inputType="date" inputKey="date" inputLabel="Date of Exam  " updateInput={this.updateInput} />
{/*}
                                                <input
                                                    value={this.state.value}
                                                    onChange={this.handleChange11}
                                                    type="number"
                                                    min="1"
                                                    max="30"
                                                />
                    */}
                                                {/*}

                                                <table style={{ textAlign: "right"}}>
                <thead key="one">
                    <tr>
                       
                            <th>ClassLevel</th>

                            <th style={{ textAlign: 'right' }}>  Section</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        this.state.data.map((data,i) => {
                            if (this.state.data != "") {

                                return (
                                    <tr>
                                    <td><FormControlLabel
                                    control={
                                        <Checkbox
                                        //{...data}
                                            checked={this.state.checked}
                                            onChange={this.handleChange('checked')}
                                            value="checked"
                                            name="check"    
                                            //selected={this.state.selected[data.level]}      
                                        />
                                    }
                                    //label={data.level}
                                />
                                </td>
                                <td>{data.level}</td>
                                <td>{data.id_class}</td>
                                </tr>
                                );
                            }

                        }

                        )
                    }

                </tbody>
            </table>
                                              
                */}
                                                {/*}   
                                                
                                                {
                                                    this.state.data.map((data, i) => {
                                                        

                                                            return (
                                                                <div key ={i}>
                                                                <table>
                                                                    <th>level</th>
                                                                    <th>section</th>
                                                                    <tr>
                                                                <td><FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                    //{...data}
                                                                        checked={this.state.checked}
                                                                        checked={this.state.selected[data.level,data.id_class]}
                                                                        onChange={this.handleChange('checked')}
                                                                        onChange={this.updateInput}
                                                                        value={data.level +data.id_class}
                                                                        name="check[]"
                                                                        id="check"  
                                                                        //selected={this.state.selected[data.level]}      
                                                                    />
                                                                }
                                                                //label={data.level}
                                                            />
                                                            </td>
                                                            <td>{data.level}</td>
                                                            <td>{data.id_class}</td>
                                                            </tr>
                                                            </table>
                                                            </div>                                                          
                                                            );   
                                                    }

                                                    )
                                                }

                                              
                                                <p>this box is {msg}.</p>
*/}
                                            </CardBody>
                                            <CardFooter>
                                                <Button color="info" name="create" type="submit" onSubmit={this.handleSubmit}  value="create">Create </Button>
                                            </CardFooter>
                                            {/* </GridItem>
                              
                        </GridContainer>  */}

                                        </form>

                                    ),
                                }
                            ]}

                        >

                        </CustomTabs>
                    </GridItem>
                </GridContainer>
                <div >
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            <CustomTabs
                                headerColor="info"
                                tabs={[
                                    {
                                        tabName: "Create_An_Exam",
                                        tabIcon: BugReport,
                                        tabContent: (
                                            <GridContainer justify="center">
                                                <GridItem xs={12} sm={12} md={8} >
                                                    <CardHeader></CardHeader>
                                                    <CardBody justify="center">
                                                        {/*}  <App />
                                                    <TableEditablePage/>*/}
                                                        <Point />
                                                    </CardBody>

                                                </GridItem>
                                            </GridContainer>

                                        ),
                                    }
                                ]}

                            >

                            </CustomTabs>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        )
    }
}
