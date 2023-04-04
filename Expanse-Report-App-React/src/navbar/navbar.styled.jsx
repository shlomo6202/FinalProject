import { AppBar, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  ...theme.mixins.toolbar,

  "&.MuiTabs-indicator": {
    color: "white",
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.mixins.toolbar,
  fontWeight: 600,
  fontSize: ".9em",
  color: "#efefef",
  "&.Mui-selected": {
    color: "white",
  },
  "&:hover": {
    background: "var(--purple-hover)",
  },
}));

export const StyledAppBar = styled(AppBar)(() => ({
  background: "var(--purple-dark)",
}));

export const LogoTypography = styled(Typography)(() => ({
  fontVariant: "h6",
  href: "/",
  display: "flex",
  marginRight: "2em",
  color: "white",
  fontWeight: 700,
}));
