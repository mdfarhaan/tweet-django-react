import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { TextField, Grid, Button } from "@material-ui/core";

function TweetBox() {
  const useStyles = makeStyles({
    container: {
      paddingTop: 20,
      alignItems: "flex-end",
    },

    button: {
      backgroundColor: "#1DA1F2",
      color: "#F5F8FA",
      "&:hover": {
        backgroundColor: "#0066b2",
        color: "F5F8FA",
      },
    },
  });

  const classes = useStyles();
  const [tweet, setTweet] = useState("");

  const tweetHandler = (event) => {
    setTweet(event.target.value);
  };

  const tweetSubmitHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweet: tweet,
      }),
    };

    fetch("http://127.0.0.1:8000/api/post/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    setTweet("");
  };

  return (
    <div>
      <form onSubmit={tweetSubmitHandler}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Tweet"
          variant="outlined"
          onChange={tweetHandler}
        />

        <Grid
          className={classes.container}
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Button variant="contained" type="submit" className={classes.button}>
            Tweet
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default TweetBox;
