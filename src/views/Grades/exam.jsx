import React, { Component } from 'react';
import color from '@material-ui/core/colors/deepOrange';
import Button from "components/CustomButtons/Button.jsx";
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Icon from '@material-ui/core/Icon';
import Build from "views/Grades/text";
import Popup from "reactjs-popup";
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

//



class Exam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchString: "",
            idString: "",
            priceString: "",
            flag: '',
            showPopup: false
            //products: data,
            //originalProducts: products,

        };
        this.updateInput = this.updateInput.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.handleSubmit5 = this.handleSubmit5.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.search = this.search.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    deleteRow(event) {
        var data = [...this.state.data];
        //var x=getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state);
        data.splice(event, 1);

        this.setState({ data });
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));

    }

    deleteall = (event) => {
        event.preventDefault();
        //alert('Handle it on your own');
        console.log(this.state);
        postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));


    }
    onClick(e) {
        const { flag } = this.state;
        e.preventDefault();
        this.setState({ flag: !flag });
        return (
            <div>


                {this.state.flag ? <Build /> : <div></div>}
            </div>
        );
    }

    componentDidMount() {
        var th = this;
        //this.serverRequest = axios.get(this.props.source)
        getData(`http://localhost/test_project-master%20(4)/test_project-master/src/views/Grades/getexam.php`)
            .then(function (event) {
                th.setState({
                    data: event//.data
                });
            })
        // getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/dele2.php`)

    }
    handleSubmit5 = (event) => {

    }
    componentWillUnmount() {
        //this.serverRequest.abort();
    }

    onSubmit() {
        console.log(this.state);
        //   postData(`http://localhost/test_project-master%20(4)/test_project-master/src/views/Grades/getexam.php`, this.state)
        //     .then(data => console.log(JSON.stringify(data)))
        //     .catch(error => console.error(error));
        return (
            <div>


                {this.state.flag ? <Build /> : <div></div>}
            </div>
        );
    }

    updateInput = (event) => {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    search = (event) => {
        event.preventDefault();
        if (event.target.value) {
            // console.log("event.target.value",event.target.value);
            let filtered = this.state.data.filter(item => {
                return (
                    // item.name == event.target.value ||
                    // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    // item.id == Number(event.target.value) ||
                    item.level.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.subject.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.max.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.date.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    item.semester.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                ...this.state,
                searchString: event.target.value,
                data: filtered
            });
        } else {
            this.setState({
                ...this.state,
                data: this.state.data,
                searchString: "",
                // idString: "",
                // priceString: ""
            });
            setTimeout(() => {
                this.componentDidMount();
            }, 50);

        }
    };




    render() {
        const { searchString } = this.state;

        return (
            <div className="Table">

                <input style={{ width: "50%", color: "#000", margin: "3px 0", height: "40px", border: "1px solid #000", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                    type="search" placeholder="Search" name="search" value={searchString}
                    onChange={this.search} />
                <div style={{ display: 'flex', width: '100%' }}>
                    <Paper style={{
                        width: "100%",
                        align: "center",
                        size: "30%",
                        align: "center",
                    }}>
                        <Table style={{
                            width: "30%",
                            align: "center",
                            size: "50%"
                            , minWidth: 100, align: "center"

                        }}>

                            <TableHead style={{ color: "#000 bold", Width: "50%", align: "center", background: "rgb(241, 245, 248)" }}>
                                <TableRow>
                                    <TableCell>Classes</TableCell>
                                    <TableCell >Subject</TableCell>
                                    <TableCell >Semester</TableCell>
                                    <TableCell >Mark</TableCell>
                                    <TableCell>Type of Exam</TableCell>
                                    <TableCell >Date of Exam</TableCell>
                                    <TableCell >Add Grade</TableCell>
                                    <TableCell >Delete</TableCell>

                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((item, key) =>

                                        <TableRow key={key}>
                                            <TableCell style={{ width: "10%", }}>{item.level}</TableCell>
                                            <TableCell style={{ width: "30%", }}>{item.subject}</TableCell>
                                            <TableCell style={{ width: "30%", }}>{item.semester}</TableCell>
                                            <TableCell style={{ width: "30%", }}>{item.max}</TableCell>
                                            <TableCell style={{ width: "30%", }}>{item.type}</TableCell>
                                            <TableCell style={{ width: "30%", }}>{item.date}</TableCell>
                                            <TableCell style={{ width: "30%", }}><Icon style={{ fontSize: 30 }} onClick={this.togglePopup.bind(this)}>add_circle</Icon></TableCell>
                                            {this.state.showPopup ?
                                                <Popup
                                                    text='Close Me'
                                                    closePopup={this.togglePopup.bind(this)}
                                                />
                                                : null
                                            }
                                            <TableCell style={{ width: "30%", }}><DeleteForeverIcon style={{ fontSize: 40 }} onClick={this.deleteRow} /></TableCell>
                                        </TableRow>


                                    )


                                }



                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default Exam

// <div>
//<h1>All Events</h1>
//<table>
  //  <tbody>
   //     {contents}
 //   </tbody>

//</table>

//</div>