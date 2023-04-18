import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = "channels";
    const query = `part=snippet&id=${id}`;
    const newParams = "search";
    const newQuery = `channelId=${id}&part=snippet&order=date`;

    fetchFromAPI(params, query)
      .then((data) => setChannelDetails(data.items[0]))
      .catch((error) => console.error(error));

    fetchFromAPI(newParams, newQuery)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error(error));
  }, [id]);

  // if (!bane?.length) return "Loading...";

  // const bannerUrl = channelDetails?.brandingSettings?.image?.bannerExternalUrl;

  return (
    <div>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard
            id={channelDetails?.id}
            snippet={channelDetails?.snippet}
            stats={channelDetails?.statistics?.subscriberCount}
            marginTop="-110px"
          />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" }, width: { xs: "100%" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
