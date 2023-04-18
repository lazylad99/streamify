import React from "react";

const ChannelProfile = () => {
  return (
    <div>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={snippet?.title}
        sx={{
          borderRadius: "50%",
          height: "180px",
          width: "180px",
          mb: 2,
          border: "1px solid #e3e3e3",
        }}
      />
    </div>
  );
};

export default ChannelProfile;
