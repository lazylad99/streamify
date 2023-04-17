import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import ChannelDetail from "./ChannelDetail";

const ChannelCard = ({ id, snippet }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <Link to={`/channel/${id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={snippet.thumbnails.high.url || demoProfilePicture}
            alt={snippet.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
