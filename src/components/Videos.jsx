import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map(({ id, snippet }) => (
        <Box key={id.videoId}>
          {id.videoId && (
            <VideoCard key={id.videoId} id={id} snippet={snippet} />
          )}
          {id.channelId && <ChannelCard id={id} snippet={snippet} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
