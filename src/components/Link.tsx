import { Stack, useTheme } from "@mui/material";
import { ReactElement } from "react";

interface LinkProps {
  href: string;
  description: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  description,
}): ReactElement => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} alignItems={"center"} gap={"5.6px"}>
      <img
        src={require("../icons/Folder.png")}
        alt="icon"
        width={"12,8px"}
        height={"11,2px"}
      />
      <a
        style={{
          color: `${theme.palette.secondary.main}`,
          padding: "0",
          textTransform: "none",
          fontSize: "12px",
          fontFamily: "SBSansInterface",
          textDecoration: "none",
        }}
        href={`${href}`}
      >
        {description}
      </a>
    </Stack>
  );
};
