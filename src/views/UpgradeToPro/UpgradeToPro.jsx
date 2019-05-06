/*import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};

function UpgradeToPro(props) {
  const { classes } = props;
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>
              Material Dashboard PRO React
            </h4>
            <p className={classes.cardCategoryWhite}>
              Are you looking for more components? Please check our Premium
              Version of Material Dashboard Angular.
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Free</th>
                    <th className={classes.center}>PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td className={classes.center}>30</td>
                    <td className={classes.center}>200</td>
                  </tr>
                  <tr>
                    <td>Plugins</td>
                    <td className={classes.center}>2</td>
                    <td className={classes.center}>10</td>
                  </tr>
                  <tr>
                    <td>Example Pages</td>
                    <td className={classes.center}>7</td>
                    <td className={classes.center}>28</td>
                  </tr>
                  <tr>
                    <td>Login, Register, Pricing, Lock Pages</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ReactTables, ReactVectorMap, ReactSweetAlert, Wizard,
                      Validation, ReactBigCalendar etc...
                    </td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Sidebar</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>Free</td>
                    <td className={classes.center}>Just $59</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round disabled>
                        Current Version
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button
                        round
                        color="danger"
                        href="https://www.creative-tim.com/product/material-dashboard-pro-react?ref=md-free-react-upgrade-live"
                      >
                        Upgrade to Pro
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(UpgradeToPro);
*/






import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Max from "views/UpgradeToPro/max_value.jsx";
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
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
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
class UpgradeToPro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
    }
    this.getlevel = this.getlevel.bind(this);
    this.getSection = this.getSection.bind(this);
    this.getType = this.getType.bind(this);
    this.getMark = this.getMark.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleChange11=this.handleChange11.bind(this);
  }
  getlevel = () => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    return lastParameter5;
  }
  getSection = () => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    return lastParameter_id;
  }
  getType = () => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    var pathArray11 = window.location.pathname.split('%20');
    return unescape(lastParameter4);
  }
  getMark = () => {
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    return lastParameter1;
  }
  componentDidMount() {
    var th = this;
    //this.serverRequest = axios.get(this.props.source)

    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();
    getData(`http://localhost/test_project-master%20(4)/test_project-master/src/views/UpgradeToPro/gets.php?param1=` + lastParameter_id + `&param2=` + lastParameter5)
      .then(function (event) {
        th.setState({
          data: event//.data
        });
      })
  }

  updateInput = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  componentWillUnmount() {
    //this.serverRequest.abort();
  }
  handleChange11 = event => {
      let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();

    this.state.data.map((item, i) => {

      postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UpgradeToPro/store.php?param1=` + lastParameter_id + `&param2=` + lastParameter5 + `&param3=` + lastParameter4 + `&param4=` + item.name+" "+item.mname+" "+item.lname + `&param5=` + item.id, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error))


    })
    e.target.reset();
  }

  handleSubmit11 = (e) => {
    e.preventDefault();
    var pathArray = window.location.pathname.split('/');
    var lastParameter1 = pathArray.pop();
    var lastParameter2 = pathArray.pop();
    //var lastParameter = pathArray.pop();
    var lastParameter3 = pathArray.pop();
    var lastParameter4 = pathArray.pop();
    var lastParameter5 = pathArray.pop();
    var lastParameter_id = pathArray.pop();

    this.state.data.map((item, i) => {

      postData(`http://localhost/test_project-master (4)/test_project-master/src/views/UpgradeToPro/getexam.php?param1=` + lastParameter_id + `&param2=` + lastParameter5 + `&param3=` + lastParameter4 + `&param4=` + item.name  + `&param5=` + item.id, this.state)
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error))


    })
    e.target.reset();
  }

  render() {
    return (
      <form action="store.php" onSubmit={this.handleSubmit}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <Card>
              <CardHeader color="info">
              <pre style={{fontSize:"20px",fontFamily:"Comic Sans MS"}}> Class:{this.getlevel()}             Section:{this.getSection()}          Mark:{this.getMark()} </pre>
             
              </CardHeader>
              <CardBody>

                <center>
                  <div>
                 <pre style={{textAlign:"left",fontSize:"20px",fontFamily:"Comic Sans MS"}}> Type of Exam:   {this.getType()} </pre> 


                    <table style={{ background: "white", border: " 1px solid #c5deee" }} onChange={this.props.get}>
                      <thead style={{ border: " 5px solid black", background: "#c5deee" ,fontSize:"20px",fontFamily:"Comic Sans MS"}}>
                        <tr>
                        <td>ID Student</td>
                          <td> Name Student</td>
                          
                          <td> Mark</td>
                        </tr>
                      </thead>
                      <tbody>


                        {
                          this.state.data.map((item, i) =>

                            <tr key={i} style={{   fontSize:"18px",fontFamily:"Comic Sans MS"}}>
                            <td>{item.id}</td>
                              <td>{item.name +" "+item.mname+" "+item.lname}</td>
                              
                              
                              <td>
                                <input type="number" name={item.name+" "+item.mname+" "+item.lname}  onChange={this.handleChange11}  onClick={this.updateInput} min="0" max={this.getMark()}  />
                               
                              </td>
                            </tr>
                          )
                        }

                      </tbody>
                    </table>

                  </div>
                </center>
              </CardBody>

              <CardFooter>

                <Button color="info" name="store" type="submit" value="store">Store</Button>

              </CardFooter>

            </Card>
          </GridItem>
        </GridContainer>
      </form>
    );
  }
}
export default withStyles(styles)(UpgradeToPro);
