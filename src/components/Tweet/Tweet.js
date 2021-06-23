import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

function Tweet() {
  const [tweetData, setTweetData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/view/")
      .then((response) => response.json())
      .then((data) => {
        var newData = data.reverse();
        setTweetData(newData);
      });
  }, []);

  return (
    <div>
      <Box m={2} pt={3}>
        <Typography component="h2" variant="h2">
          Tweet
        </Typography>
        <TweetBox />
        {tweetData.map((data) => (
          <TweetList
            id={data.id}
            tweet={data.tweet}
            created_at={data.created_at}
          />
        ))}
      </Box>
    </div>
  );
}

export default Tweet;
