import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const params = "search";
    const query = `q=${searchTerm}&part=snippet,id`;
    fetchFromAPI(params, query)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white" }}
        style={{ fontFamily: "Montserrat Alternates, sans-serif" }}
      >
        Search Results for:
        <span style={{ color: "#F31503" }}> {searchTerm} </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
