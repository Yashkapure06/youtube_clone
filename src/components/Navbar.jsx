import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >

    <Link to="/" style={{display:'flex', alignItems: 'center', fontFamily:'monospace; sans-serif',color:'#fff', fontSize:25}}>
      <img src={logo} alt="YouTube" height={35}/> YouTube
    </Link>
    <SearchBar/>
  </Stack>
);

export default Navbar;
