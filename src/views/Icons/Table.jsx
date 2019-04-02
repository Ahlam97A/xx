/*import color from '@material-ui/core/colors/deepOrange';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "components/CustomButtons/Button.jsx";
import Countstudent from "views/Icons/countstudent";
import Ahlam from "views/textt/ahlam";
import Page from "views/Icons/showhide";
import { browserHistory, Router, Route } from 'react-router';
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
function getData(url = ``, data = {}) {
    // Default options are marked with *
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

function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      alert(`You just selected '${row['level']}'`)
    }
  }


class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showing: true,
        };
        this.updateInput = this.updateInput.bind(this);

        this.countstudent = this.countstudent.bind(this);
        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }

    


    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
    }



    countstudent() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/countstudent.php`)
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



    handleSubmit5 = (event,level,section) => {
        const { showing } = this.state
        event.preventDefault();
        this.setState({ showing: !showing });
        //console.log("value>>>",value);
        console.log("level>>>",level);
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/student.php/${level+section}`,this.state)
        
           
        
  


        // window.location.assign('admin/Students?={row.level}');
       
     
        var element = document.getElementById('YOUR_ID');
       // element.setAttribute("href", url);


        // let path = `http://localhost:3000/admin/Students`;
        //return(<h1>ahlam</h1>);

       // return (<div style={{ color: "red" }}>ahlam<p>ahlam</p></div>);
        // return (<a href="http://localhost:3000/admin/Classes/ahlam?={row.level}">ahla,</a>);

    }
    _handleClick = (event) => {
        event.preventDefault();
        console.log(this.state);
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/countstudent.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
        this.setState({ data: event.target.value }, () => {
            var data = { data: this.state.testTime }
        })
    }


    send = (e,level,section) => {
       
        e.preventDefault();
       
            e.preventDefault();
            
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/send.php/${level}`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
         window.location.assign('/admin/Students/'+level);

    }

    onClick() {
        this.setState({ showing: !this.state.showing });
    }

    render() {
        //   const { classes } = props;
        const style = this.state.showWarning ? { display: 'none' } : {};

        const { data } = this.state;
        const HelloWorldText = () => (<h2> Hello World </h2>);
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            unselectable: [2],
            selected: [1],
            onSelect: onSelectRow,
            bgColor: 'gold'
          };
           

        const { showing } = this.state;


        return (
            <div className="Table" >



                <Paper style={{
                    width: "70%",
                    align: "center",

                }}>

                    <Table style={{ Width: "100%", align: "center" }} selectrow={selectRowProp}>
                        <TableHead style={{ color: "#000 bold", Width: "100%", align: "center", background: "rgb(241, 245, 248)" }}>
                            <TableRow>
                                <TableCell>Classes</TableCell>
                                <TableCell >Sections</TableCell>
                                <TableCell >Number of student</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                this.state.data.map((row, i) => (

                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row"  >
                                       {/* <form onSubmit={this.handleSubmit5}>*/
                                          /*}  <a href="http://localhost:3000/admin/Classes?={row.level}"> <input className ={row.level+row.section} type="submit" value={row.level+row.section} onClick={e=>this.handleSubmit5(e, row.level,row.section)} name="level" /></a>

                                            {this.state.showing ? null : <Page />}
                                           
                                        </TableCell>
                                        <TableCell >
                                            {row.section}
                                        </TableCell>

                                        <TableCell >
                                           
                                          <a href="http://localhost:3000/admin/Students?class={row.level}">view</a>
                                        
                                        </TableCell>
                                        <TableCell >
                                            <Countstudent />
                                        </TableCell>
                                        <TableCell >
                                          <input type="submit" value={"view student"+row.level+row.section} onClick={e=>this.send(e, row.level,row.section)} />
                                        </TableCell>

                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
*/
//export default Build;
///////////////////////





import TableBody from '@material-ui/core/TableBody';
import color from '@material-ui/core/colors/deepOrange';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from "components/CustomButtons/Button.jsx";
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
function getData(url = ``, data = {}) {
    // Default options are marked with *
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




class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.updateInput = this.updateInput.bind(this);


        //this.getData = this.getData.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
    }



    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php`)
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



    handleSubmit5 = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/getclass.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }

    send=(e)=>{
        var data = [...this.state.data];
       data.splice(e, 1);
       data.slice(0, 0);
        this.setState({   data  });
        e.preventDefault();
        postData(`http://localhost/test_project-master (4)/test_project-master/src/views/Icons/send.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    }

    render() {
     //   const { classes } = props;
        

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
 
       
        return (
            <div className="Table">
                <table style={{ border: " 1px solid rose" ,align:"center"}} onChange={this.props.get}>
                    <thead style={{ border: " 1px solid rose", background: "rose"}}>
                        <tr style={{ border: " 1px solid rose"}}>
                        <th>Level</th>
                        <th>Section</th>
                        <th>Students</th>
                        <th>Grades</th>
                        <th>Attendance</th>
                        <th>Activities</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            this.state.data.map((item ,i)=>
                               
                                <tr key={i}>
                                <td>{item.level}</td>
                                <td>{item.section}</td>
                                <td>
                                        <Button color="rose" type="submit" > <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Students/'+item.section);
                                            }}> View</a>
                                        </Button>
                                </td>
                                <td>
                                      <Button color="rose" type="submit" >
                                      {this.send}
                                      <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                               
                                                window.location.assign('/admin/Grades/');
                                            }}> View</a>
                                      </Button>
                                </td>
                                <td>
                                   <Button color="rose" type="submit" ><a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Attendance/');
                                            }}> View</a>
                                    </Button>
                                </td>
                                <td>
                                     <Button color="rose" type="submit" ><a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window.location.assign('/admin/Activities/');
                                            }}> View</a>
                                     </Button>
                                     </td>
                                </tr>
                               
                            
                            )
                            
                            
                        }
                        
                    </tbody>
                    
                </table>

            </div>
        );
    }
}

export default Build










