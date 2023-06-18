import { Divider, Stack } from "@mui/material";
import React from "react";
import AboutMe from "../components/AboutMe";
import FormMain from "../components/FormMain";

export default function Main() {
  return (
    <Stack sx={{ p: "24px", gap: "24px" }}>
      <AboutMe />
      <Divider />
      <FormMain />
    </Stack>
  );
}
