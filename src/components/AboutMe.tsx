import { Stack, Typography } from "@mui/material";
import { Link } from "./Link";

export default function AboutMe() {
  return (
    <Stack sx={{ flexDirection: "row", gap: "24px", alignItems: "center" }}>
      <img
        src={require("../img/ava.jpeg")}
        alt="avatar"
        width={"80px"}
        height={"80px"}
        style={{ borderRadius: "50%" }}
      />

      <Stack gap={"8px"}>
        <Typography variant="h1">Страпко Даниил</Typography>
        <Stack direction={"row"} gap={"17.6px"}>
          <Link href="tel:+79964102523" description="Telegram" />
          <Link href="https://github.com/strapko-dev" description="GitHub" />
          <Link
            href="https://drive.google.com/file/d/1CdldEyFHapEu4YAjKJGqKMXqGjMAtYY6/view?usp=sharing"
            description="Resume"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
