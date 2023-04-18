import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = "videos";
    const query = `part=snippet,statistics&id=${id}`;
    const newParams = "search";
    const newQuery = `part=snippet&relatedToVideoId=${id}&type=video`;

    fetchFromAPI(params, query)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((error) => console.error(error));

    fetchFromAPI(newParams, newQuery)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error(error));
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";
  if (!videos) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box
          sx={{
            width: "100%",
            position: "sticky",
            top: "86px",
            p: "0px 15px",
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <div
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "8px",
              padding: "8px 8px",
            }}
          >
            <Typography color="#fff" variant="h5" fontWeight="bold" p="2">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                  fontStyle="bold"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 15, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </div>
        </Box>

        <Box
          p="15px 15px"
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
