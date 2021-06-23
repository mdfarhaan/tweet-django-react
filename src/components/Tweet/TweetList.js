import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core/";

function TweetList(props) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#2D323C",
    },

    mainDiv: {
      paddingTop: 15,
    },

    title: {
      color: "#F5F8FA",
      fontWeight: "bold",
      fontSize: 30,
      fontFamily: "Segoe UI",
    },

    gridList: {
      paddingLeft: 20,
    },

    date: {
      fontSize: 20,
      color: "#F5F8FA",
    },

    button: {
      backgroundColor: "#D32323",
      color: "#F5F8FA",
      "&:hover": {
        backgroundColor: "#AA0000",
        color: "F5F8FA",
      },
    },
  });
  const classes = useStyles();

  const tweetId = props.id;
  const delTweet = () => {
    fetch("http://127.0.0.1:8000/api/del/" + tweetId)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => window.location.reload());
  };

  return (
    <div>
      <Grid className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent>
            <Typography component="h4" variant="h4" className={classes.title}>
              {props.tweet}
            </Typography>
          </CardContent>

          <Grid
            className={classes.gridList}
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography component="h6" variant="h6" className={classes.date}>
              {props.created_at}
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                onClick={delTweet}
                className={classes.button}
              >
                Delete
              </Button>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default TweetList;
