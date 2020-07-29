import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import IconButton from '@material-ui/core/IconButton';
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Paginations from "./pagination/pagination";
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Productinfo(props) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(80);
  const [pagenumber, setPageNumber] = useState(1);

//   console.log(props, "props");
  let data = props && props.data ? props.data : [];
  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
//   console.log(currentPosts, "currentPosts");

  const paginate = async (pageNumber) => {
    setCurrentPage(pageNumber);
    setPageNumber(pageNumber);
  };
  
  return (
      <>
    <div
      style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
    >
       
      {currentPosts.map((ele, index) => {
          console.log(ele)
          return (
              <>
            <Card
              className={classes.root}
              style={{ width: 350, margin: 20 }}
              key={index}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ele.additional_image ? ele.additional_image : <CircularProgress /> }
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {ele.product}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '14px'}}>
                    {ele.brand}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {ele.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '14px'}}>
                    {ele.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '14px'}}>
                    {ele.collection}
                  </Typography>
              </CardActions>
            </Card>
          
            </>
          );
        })}
        
    </div>
      {currentPosts && <Paginations
        postsPerPage={postsPerPage}
        totalPosts={props.data.length}
        paginate={paginate}
      />}
      
    </>
  );
}

