import React, { Suspense } from "react";
import "./App.css";
import * as d3 from "d3";
import data from "./tanishq_products.csv";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Footer from "./footer";

const Productinfo = React.lazy(() => import("./productInfo"));



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visualData: [],
      categoryName: "",
    };
  }

  componentDidMount() {
    d3.csv(data)
      .then((data) => {
        this.setState({
          visualData: data,
        });
      })
      .catch(function (err) {
        throw err;
      });
  }

  groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  handleChange = (e) => {
    let categoryName = e.target.value;
    this.setState({ categoryName: categoryName });
    this.state.visualData.map((ele) => {
      if (ele.category === categoryName) {
        this.setState((prevState) => ({
          visualData: [ele, ...prevState.visualData, ele],
        }));
      }
    });
  };

  render() {
    let visualData = this.groupBy(this.state.visualData, "category");
    let catKeys = Object.keys(visualData);
    catKeys = catKeys.filter((item) => item);

    return (
      <>
        <div style={{ backgroundColor: "#f1f3f6", height: "100%" }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                E-commerce
              </Typography>
            </Toolbar>
          </AppBar>
         
          <div>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div
                  style={{
                    margin: 40,
                  }}
                >
                  <p style={{ paddingLeft: 10 }}>
                    <i className="fa fa-filter"></i> Filters
                  </p>
                  <div>
                    <FormControl style={{ width: "206px", height: "50%" }}>
                      <InputLabel id="demo-simple-select-label">
                        Apply Filter On Category
                      </InputLabel>
                      <Select
                        value={this.state.categoryName}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => this.handleChange(e)}
                      >
                        {catKeys.map((catName, index) => {
                          return (
                            <MenuItem value={catName} key={index}>
                              {catName}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </Grid>
              <Grid item xs={10}>
                <Suspense fallback={<CircularProgress />}>
                  <Productinfo data={this.state && this.state.visualData} />
                </Suspense>
              </Grid>
            </Grid>
          </div>
        </div>
        <div>{this.state && this.state.visualData && <Footer />}</div>
      </>
    );
  }
}

export default App;
