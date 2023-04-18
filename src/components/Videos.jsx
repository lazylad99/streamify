import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map(({ id, snippet }, idx) => (
        <Box key={idx}>
          {id?.videoId && (
            <VideoCard key={id?.videoId} id={id} snippet={snippet} />
          )}
          {id?.channelId && (
            <ChannelCard
              key={id?.channelId}
              id={id.channelId}
              snippet={snippet}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
