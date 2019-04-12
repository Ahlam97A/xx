
/*import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/core/Tab';
import Update from "@material-ui/icons/Update";
import LocalOffer from "@material-ui/icons/LocalOffer";
import TabLink from '@material-ui/core/Tab';
import Cloud from "@material-ui/icons/Cloud";
import BugReport from "@material-ui/icons/BugReport";
import DateRange from "@material-ui/icons/DateRange";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import InputLabel from '@material-ui/core/InputLabel';
import Tab from '@material-ui/core/Tab';
import Store from "@material-ui/icons/Store";
import withStyles from "@material-ui/core/styles/withStyles";
import Code from "@material-ui/icons/Code";
import TabPanel from '@material-ui/core/Tab';
import Search from '@material-ui/icons/Search';
import TabContent from '@material-ui/core/Tab';

import React from "react";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import InputForm from "./InputForm.jsx";
import Table1 from "views/TableList/Table1";


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



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

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
    .then(response => response.text()); // parses response to JSON
}


//function TypographyPage(props) {
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      flag: false,
      searchString: "",
     
    
      idString: "",
      priceString: "",
    };
   // this.search = this.search.bind(this);
     this.updateInput = this.updateInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit_upload = this.handleSubmit_upload.bind(this);
    // this.handleSubmit3 = this.handleSubmit3.bind(this);
    // this.handleSubmit4 = this.handleSubmit4.bind(this);
    // this.onClick=this.onClick.bind(this);
  }


  onClick(e) {
    e.preventDefault();
    this.setState({ flag: true });
  }
  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
 
  
 

difference=(event)=>{
var x=document.getElementsByName('selected');
x.target.value=event;
}
handlechangedate=(e)=>{
  e.preventDefault();
  var date1=e.target.value;
  var date2 = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  var diff=date2-date1;

  this.difference(diff);
   
  // this.updateInput(diff);

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
    const {
      searchString
  } = this.state;
    return (

      <div style={{ alignContent: "Center" }}>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Students"
              headerColor="success"
              tabs={[
                {
                  tabName: "Search",
                  tabIcon: Code,
                  tabContent: (
                    <form action="search1.php"  onChange={this.updateInput}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="success">
                              <h4 className={classes.cardTitleWhite}>Search on a specific Student</h4>
                              <p className={classes.cardCategoryWhite}>by id </p>
                            </CardHeader>

                            <CardBody>
                              <div className={classes.searchWrapper} style={{width:"100%", textAlign: "center" }} >

                              <Table1 />    
                              </div>
                            </CardBody>



                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )
                },


              ]}
            />
          </GridItem>


        </GridContainer>






      </div>
    );
  }
}

export default withStyles(style)(TypographyPage);
*/









import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from '@material-ui/core/AppBar';
import Update from "@material-ui/icons/Update";
import LocalOffer from "@material-ui/icons/LocalOffer";
import TabLink from '@material-ui/core/Tab';
import Cloud from "@material-ui/icons/Cloud";
import BugReport from "@material-ui/icons/BugReport";
import DateRange from "@material-ui/icons/DateRange";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import InputLabel from '@material-ui/core/InputLabel';
import Tab from '@material-ui/core/Tab';
import Store from "@material-ui/icons/Store";
import Icon from '@material-ui/core/Icon';
import TabList from '@material-ui/core/Tab';
import Code from "@material-ui/icons/Code";
import TabPanel from '@material-ui/core/Tab';
import Search from '@material-ui/icons/Search';
import TabContent from '@material-ui/core/Tab';
import TableCell from '@material-ui/core/TableCell';
import React from "react";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
//import Table from "components/Table/Table.jsx";
import Table from '@material-ui/core/Table';
import InputForm from "./InputForm.jsx";
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Countstudent from "views/TableList/countstudent";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

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



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

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
//function TypographyPage(props) {
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      data: [],
      searchString: "",
      searchString1: "",
      searchString2: "",
      searchString3: "",

      idString: "",
    };
    // this.updateInput = this.updateInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit_upload = this.handleSubmit_upload.bind(this);
    // this.handleSubmit3 = this.handleSubmit3.bind(this);
    // this.handleSubmit4 = this.handleSubmit4.bind(this);
    this.getNumStud = this.getNumStud.bind(this);
    this.search = this.search.bind(this);
    this.search1 = this.search1.bind(this);
    this.search2 = this.search2.bind(this);
    this.search3 = this.search3.bind(this);
    this.getSection = this.getSection.bind(this);
    this.getlevel = this.getlevel.bind(this);
    this.getCount = this.getCount.bind(this);



  }

  onClick(e) {
    e.preventDefault();
    this.setState({ flag: true });
  }
  updateInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }
  /* handleSubmit(event) {
     event.preventDefault();
     //alert('Handle it on your own');
     console.log(this.state);
     postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/a.php`, this.state)
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error));
       event.target.reset();
   }
 
   handleSubmit3 = (event) => {
     event.preventDefault();
     //alert('Handle it on your own');
     console.log(this.state);
     postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete.php`, this.state)
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error));
       event.target.reset();
 
   }
   handleSubmit4 = (event) => {
     event.preventDefault();
     //alert('Handle it on your own');
     console.log(this.state);
     postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/delete_all.php`, this.state)
       .then(data => console.log(JSON.stringify(data)))
       .catch(error => console.error(error));
       event.target.reset();
   }
 
   Search() {
     return { flag: false };
 }*/
  /* handleSubmit_upload(event) {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
  }

 handleSubmit5 = (event) => {
    event.preventDefault();
    //alert('Handle it on your own');
    console.log(this.state);
    getData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search.php`, this.state)
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error(error));
      <Table1 />

  }
  onSubmit() {
    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/search1.php`, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    return (
        <div>


            {this.state.flag ? <Table1 /> : <div></div>}
        </div>
    );
}

difference=(event)=>{
var x=document.getElementsByName('selected');
x.target.value=event;
}
handlechangedate=(e)=>{
  e.preventDefault();
  var date1=e.target.value;
  var date2 = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  var diff=date2-date1;

  this.difference(diff);
   
  // this.updateInput(diff);

}
*/




  updateInput_upload(event) {
    //let state = {};
    //state[event.target.name] = event.target.value;
    this.readFile(event);
    event.target.value = null;

  }

  handleUpload = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)


    postData(`http://localhost/material-dashboard-react-v1.5.0/src/views/Typography/upload_csvfile.php`, {
      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
        })
      },
    })
      .then(res => {
        console.log(res.statusText)
      })

  }

  componentDidMount() {
    var pathArray = window.location.pathname.split('/');
    var lastParameter = pathArray.pop();
    var lastParameter1 = pathArray.pop();
    var url = "/admin/Students/" + lastParameter;
    var th = this;
    // console.log(url);
    // return  lastParameter ;
    // return(
    // +`&param2=`+lastParameter
    getData(`http://localhost/test_project-master (4)/test_project-master/src/views/TableList/search1.php?param1=` + lastParameter1 + `&param2=` + lastParameter)
      .then(function (event) {
        th.setState({
          data: event//.data
        });
      })
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
          item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.lname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          item.id.toLowerCase().includes(event.target.value.toLowerCase())
          //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
          //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
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

  search1 = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (
          // item.name == event.target.value ||
          // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          // item.id == Number(event.target.value) ||

          item.id.toLowerCase().includes(event.target.value.toLowerCase())
          //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
          //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      this.setState({
        ...this.state,
        searchString1: event.target.value,
        data: filtered
      });
    } else {
      this.setState({
        ...this.state,
        data: this.state.data,

        searchString1: "",

        // idString: "",
        // priceString: ""
      });
      setTimeout(() => {
        this.componentDidMount();
      }, 50);

    }
  };

  search2 = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (
          // item.name == event.target.value ||
          // item.mname.toLowerCase().includes(event.target.value.toLowerCase()) ||
          // item.id == Number(event.target.value) ||

          item.addresss.toLowerCase().includes(event.target.value.toLowerCase())
          //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
          //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      this.setState({
        ...this.state,
        searchString2: event.target.value,
        data: filtered
      });
    } else {
      this.setState({
        ...this.state,
        data: this.state.data,

        searchString2: "",

        // idString: "",
        // priceString: ""
      });
      setTimeout(() => {
        this.componentDidMount();
      }, 50);

    }
  };


  search3 = (event) => {
    event.preventDefault();
    if (event.target.value) {
      // console.log("event.target.value",event.target.value);
      let filtered = this.state.data.filter(item => {
        return (

          item.date.toLowerCase().includes(event.target.value.toLowerCase())
          //item.type.toLowerCase().includes(event.target.value.toLowerCase()) ||
          //item.semester.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      this.setState({
        ...this.state,
        searchString3: event.target.value,
        data: filtered
      });
    } else {
      this.setState({
        ...this.state,
        data: this.state.data,

        searchString3: "",

        // idString: "",
        // priceString: ""
      });
      setTimeout(() => {
        this.componentDidMount();
      }, 50);

    }
  };
  getlevel = (e) => {
    var pathArray = window.location.pathname.split('/');

    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    return lastParameter5;
  }
  getSection = () => {
    var pathArray = window.location.pathname.split('/');
    var last = pathArray.pop();

    var lastParameter_id = pathArray.pop();
    return lastParameter_id;
  }
  getSection = () => {
    var pathArray = window.location.pathname.split('/');
    var last = pathArray.pop();

    var lastParameter_id = pathArray.pop();
    return lastParameter_id;
  }
  getCount = () => {

    return <Countstudent />;
  }
  getNumStud = () => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter = pathArray.pop();
    var lastParameter1 = pathArray.pop();
    var url = "/admin/Students/" + lastParameter;
    var th = this;
    this.state.data.map((row, i) => {


      getData(`http://localhost/test_project-master (4)/test_project-master/src/views/TableList/countstudent.php?param1=` + lastParameter1 + `&param2=` + lastParameter)
        .then(function (event) {
          th.setState({
            data: event//.data
          });
        })
    })

  }
  handleClick1 = (e) => {
    e.preventDefault();
    window.location.assign('/admin/Classes/');
  }


  render() {
    // var props;
    const { searchString, searchString1, searchString2, searchString3 } = this.state;
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
      borderTopLeftRadius: "10px",
      color: '#FF00FF'
    };
    const { tableHead, tableData, tableHeaderColor } = this.props;
    return (

      <div style={{ alignContent: "Center" }}>
        <Button onClick={this.handleClick1} style={{ background: "#000" }}> <ThreeSixtyIcon />
          Back To Classes</Button>
        <Button onClick={(e) => {
          e.preventDefault();
          var pathArray = window.location.pathname.split('/');
          var lastParameter = pathArray.pop();
          var lastParameter1 = pathArray.pop();

          window.location.assign('/admin/Grades/' + lastParameter1 + '/' + lastParameter);
        }} style={{ background: "#000" }}> <Icon style={{ fontSize: "20px" }}>note_add</Icon>
          Gades</Button>
        <GridContainer justify="center">

          <GridItem xs={12} sm={12} md={10}>
            <CustomTabs
              title="Students"
              headerColor="info"
              tabs={[
                {
                  tabName: "Search",
                  tabIcon: Code,
                  tabContent: (
                    <form action="search1.php" onSubmit={this.onSubmit} onChange={this.updateInput}>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="info">
                              <h4 className={classes.cardTitleWhite}>Search By Filter For Students</h4>
                              <p className={classes.cardCategoryWhite}> </p>

                            </CardHeader>

                            <CardBody>
                              <div className={classes.searchWrapper} style={{ textAlign: "center" }} >
                                <pre style={{ textAlign: "left", fontSize: "20px", display: "inline" }}> Class:{this.getlevel()}     Section:{this.getSection()}      Number of Student:<Countstudent /></pre>

                                <pre>
                                  <input style={{ width: "15%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                    type="number" placeholder="Search By ID" name="search2" value={searchString1}
                                    onChange={this.search1} />
                                  <Button color="white" justIcon round name="search" type="submit" value="search"
                                    onClick={this.onClick} >

                                    <Search />

                                  </Button>
                                  <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                    type="search" placeholder="Search By Name" name="search1" value={searchString}
                                    onChange={this.search}></input>
                                  <Button color="white" justIcon round name="search" type="submit" value="search"
                                    onClick={this.onClick}>

                                    <Search />

                                  </Button>
                                  <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                    type="search" placeholder="Search By Address" name="search3" value={searchString2}
                                    onChange={this.search2} />
                                  <Button color="white" justIcon round name="search" type="submit" value="search"
                                    onClick={this.onClick} >

                                    <Search />

                                  </Button>
                                  <input style={{ width: "20%", color: "#000", margin: "3px 0", height: "25px", border: "1px solid #bdbdbd", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                                    type="search" placeholder="Search By Date" name="search4" value={searchString3}
                                    onChange={this.search3} />
                                  <Button color="white" justIcon round name="search" type="submit" value="search"
                                    onClick={this.onClick} >

                                    <Search />

                                  </Button>
                                </pre>
                                <CardBody>



                                  <Paper style={{
                                    width: "100%",
                                    align: "center",
                                    size: "30%",
                                    align: "center",
                                  }}>
                                    <Table style={{
                                      width: "100%",
                                      align: "center",
                                      size: "50%"
                                      , minWidth: 100, align: "center",
                                      color: "rgb(255, 139, 173)"

                                    }}>

                                      <TableHead style={{ color: 'rgb(255, 139, 173)', fontSize: "20px", Width: "50%", align: "center", background: "rgb(241, 245, 248)" }}>
                                        <TableRow style={{ fontSize: "20px", }}>
                                          <TableCell>ID</TableCell>
                                          <TableCell >Name</TableCell>
                                          <TableCell >Date Of Brith</TableCell>
                                          <TableCell >Address</TableCell>



                                        </TableRow>

                                      </TableHead>
                                      <TableBody>
                                        {
                                          this.state.data.map((item, key) =>

                                            <TableRow key={key}>
                                              <TableCell style={{ width: "20%", }}>{item.id}</TableCell>
                                              <TableCell style={{ width: "30%", }}>{item.name + " " + item.mname + " " + item.lname}</TableCell>

                                              <TableCell style={{ width: "30%", }}>{item.date}</TableCell>
                                              <TableCell style={{ width: "30%", }}>{item.addresss}</TableCell>



                                            </TableRow>


                                          )


                                        }



                                      </TableBody>
                                    </Table>
                                  </Paper>





                                </CardBody>
                              </div>
                            </CardBody>



                          </Card>
                        </GridItem>
                      </GridContainer>
                    </form>
                  )
                },


              ]}
            />
          </GridItem>


        </GridContainer>






      </div>
    );
  }
}

export default withStyles(style)(TypographyPage);



