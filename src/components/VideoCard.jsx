import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({ id, snippet }) => {
  const { videoId } = id;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          minWidth: "358px",
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: {
                xs: "100%",
                sm: "358px",
              },
              height: 180,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="body1" fontWeight="bold" color="#FFF">
              {snippet?.title.length > 60
                ? snippet?.title.slice(0, 60).concat("..")
                : snippet?.title || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCard;
