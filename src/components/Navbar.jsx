import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo1 from "../utils/streamify1.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo1} alt="logo" height={45} className="logo" />
      <h1 className="nav-title">Streamify</h1>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
