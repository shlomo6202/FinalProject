import { styled } from "@mui/material";
import { Box, Container } from "@mui/system";

export const StyledContainer = styled(Container)(() => ({
  display: "grid",
  gridTemplateRows: "1fr 10fr",
  background: "var(--off-white)",
  height: "calc(100vh - 64px)",
}));

export const StyledBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "2fr 3fr",
}));

export const customScroll = {
  overflowY: "auto",
  overflowX: "hidden",
  height: "calc(100vh - 149.23px)",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },
  ":hover": {
    "&::-webkit-scrollbar-thumb": {
      background: "#d3d3d3",
    },
  },
};
